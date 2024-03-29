import { useEffect, useRef, useState } from 'react';
import { createFFmpeg } from '@ffmpeg/ffmpeg';
import { Button, Modal, Spinner, Toast, ToastContainer } from 'react-bootstrap';
import { ConfigProvider, Slider } from 'antd';

import { VideoPlayer } from './VideoPlayer';
import VideoConversionButton from './VideoConversionButton';
import { sliderValueToVideoTime } from '../../utils/utils';

import styles from './VideoEditor.module.css';
import video_icon from '../../assets/icons/video_icon.svg';
import check from '../../assets/icons/check.svg';

const ffmpeg = createFFmpeg({ log: true });

function VideoEditor() {
    const uploadFile = useRef('');
    const [ffmpegLoaded, setFFmpegLoaded] = useState(false);
    const [videoFile, setVideoFile] = useState();
    const [videoPlayerState, setVideoPlayerState] = useState();
    const [videoPlayer, setVideoPlayer] = useState();
    const [sliderValues, setSliderValues] = useState([0, 100]);
    const [processing, setProcessing] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        ffmpeg.load().then(() => {
            setFFmpegLoaded(true);
        });
    }, []);

    useEffect(() => {
        const min = sliderValues[0];
        if (min !== undefined && videoPlayerState && videoPlayer) {
            videoPlayer.seek(sliderValueToVideoTime(videoPlayerState.duration, min));
        }
    }, [sliderValues]);

    useEffect(() => {
        if (videoPlayer && videoPlayerState) {
            const [min, max] = sliderValues;

            const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
            const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

            if (videoPlayerState.currentTime < minTime) {
                videoPlayer.seek(minTime);
            }
            if (videoPlayerState.currentTime > maxTime) {
                videoPlayer.seek(minTime);
            }
        }
    }, [videoPlayerState]);

    useEffect(() => {
        if (!videoFile) {
            setVideoPlayerState(undefined);
            setVideoPlayerState(undefined);
        }
        setSliderValues([0, 100]);
    }, [videoFile]);

    if (!ffmpegLoaded) return <div>load</div>;

    return (
        <article className="layout" style={{ padding: '40px 0 120px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h1 className={styles.title}>Video Edit</h1>

                {videoFile && (
                    <div>
                        <input
                            onChange={(e) => setVideoFile(e.target.files[0])}
                            type="file"
                            accept="video/*"
                            style={{ display: 'none' }}
                            ref={uploadFile}
                        />
                        <Button
                            className={styles.re__upload__btn}
                            onClick={() => uploadFile.current.click()}
                            style={{ width: 'fit-content' }}
                        >
                            비디오 재선택
                        </Button>
                    </div>
                )}
            </div>

            <section>
                {videoFile ? (
                    <VideoPlayer
                        src={videoFile}
                        onPlayerChange={(videoPlayer) => {
                            setVideoPlayer(videoPlayer);
                        }}
                        onChange={(videoPlayerState) => {
                            setVideoPlayerState(videoPlayerState);
                        }}
                    />
                ) : (
                    <>
                        <div className={styles.video__placeholder}>
                            <img src={video_icon} alt="video upload" />
                            <p>비디오를 업로드해주세요.</p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <input
                                onChange={(e) => setVideoFile(e.target.files[0])}
                                type="file"
                                accept="video/*"
                                style={{ display: 'none' }}
                                ref={uploadFile}
                            />
                            <Button className={styles.upload__btn} onClick={() => uploadFile.current.click()}>
                                비디오 업로드하기
                            </Button>
                        </div>
                    </>
                )}
            </section>

            {videoFile && (
                <>
                    <section
                        style={{
                            display: 'flex',
                            gap: 8,
                            marginTop: '24.5px',
                            justifyContent: 'center',
                        }}
                    >
                        <p style={{ color: '#828282', fontSize: 16, fontWeight: 500 }}>재생시간</p>
                        <p style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>
                            {Math.round(videoPlayerState?.duration)}초
                        </p>
                    </section>

                    <section
                        style={{
                            marginTop: 8,
                            marginBottom: 24,
                        }}
                    >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Slider: {
                                        handleSize: 16,
                                        dotBorderColor: '#fff',
                                        dotActiveBorderColor: '#fff',
                                        handleColor: '#2F80ED',
                                        handleActiveColor: '#2F80ED',
                                        trackBg: '#2F80ED',
                                    },
                                },
                            }}
                        >
                            <Slider
                                tooltip={{
                                    open: false,
                                }}
                                range
                                defaultValue={[0, 100]}
                                onChange={(value) => {
                                    setSliderValues(value);
                                }}
                            />
                        </ConfigProvider>
                    </section>

                    <section>
                        <VideoConversionButton
                            onConversionStart={() => {
                                setProcessing(true);
                            }}
                            onConversionEnd={() => {
                                setProcessing(false);
                                setShow(true);
                            }}
                            ffmpeg={ffmpeg}
                            videoPlayerState={videoPlayerState}
                            sliderValues={sliderValues}
                            videoFile={videoFile}
                        />
                    </section>
                </>
            )}

            <ToastContainer className="p-3" position={'top-center'} style={{ zIndex: 1 }}>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} bg="" autohide>
                    <div
                        style={{
                            display: 'flex',
                            gap: 6,
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#4F4F4F',
                            alignContent: 'end',
                            justifyContent: 'center',
                            padding: '12px 24px',
                        }}
                    >
                        <img src={check} alt="check" />
                        내보내기가 완료되었습니다.
                    </div>
                </Toast>
            </ToastContainer>

            <Modal
                show={processing}
                onHide={() => setProcessing(false)}
                backdrop={false}
                keyboard={false}
                centered
                size="sm"
            >
                <div style={{ textAlign: 'center' }}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    <p style={{ marginTop: 16, fontSize: 14, fontWeight: 600, color: '#4F4F4F' }}>
                        내보내기가 진행중입니다.
                    </p>
                </div>
            </Modal>
        </article>
    );
}

export default VideoEditor;
