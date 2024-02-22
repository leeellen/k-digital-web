import { Button } from 'antd';
import { fetchFile } from '@ffmpeg/ffmpeg';
import { readFileAsBase64, sliderValueToVideoTime } from '../../utils/utils';

import out from '../../assets/icons/out.svg';
import download from '../../assets/icons/download.svg';
import sound from '../../assets/icons/sound.svg';

function VideoConversionButton({
    videoPlayerState,
    sliderValues,
    videoFile,
    ffmpeg,
    onConversionStart = () => {},
    onConversionEnd = () => {},
}) {
    const convertToGif = async () => {
        onConversionStart(true);

        const inputFileName = 'input.mp4';
        const outputFileName = 'output.gif';

        ffmpeg.FS('writeFile', inputFileName, await fetchFile(videoFile));

        const [min, max] = sliderValues;
        const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
        const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

        await ffmpeg.run('-i', inputFileName, '-ss', `${minTime}`, '-to', `${maxTime}`, '-f', 'gif', outputFileName);

        const data = ffmpeg.FS('readFile', outputFileName);

        const gifUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'image/gif' }));

        const link = document.createElement('a');
        link.href = gifUrl;
        link.setAttribute('download', '');
        link.click();

        onConversionEnd(false);
    };

    const convertToMp3 = async () => {
        onConversionStart(true);

        const inputFileName = 'input.mp4';
        const outputFileName = 'output.mp3';

        ffmpeg.FS('writeFile', inputFileName, await fetchFile(videoFile));

        const [min, max] = sliderValues;
        const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
        const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

        await ffmpeg.run('-i', `${inputFileName}`, '-ss', `${minTime}`, '-to', `${maxTime}`, `${outputFileName}`);

        const data = ffmpeg.FS('readFile', outputFileName);

        const gifUrl = URL.createObjectURL(new Blob([data.buffer], { type: 'audio/mp3' }));

        const link = document.createElement('a');
        link.href = gifUrl;
        link.setAttribute('download', '');
        link.click();

        onConversionEnd(false);
    };

    const onCutTheVideo = async () => {
        onConversionStart(true);

        const [min, max] = sliderValues;
        const minTime = sliderValueToVideoTime(videoPlayerState.duration, min);
        const maxTime = sliderValueToVideoTime(videoPlayerState.duration, max);

        ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));
        await ffmpeg.run('-ss', `${minTime}`, '-i', 'input.mp4', '-t', `${maxTime}`, '-c', 'copy', 'output.mp4');

        const data = ffmpeg.FS('readFile', 'output.mp4');
        const dataURL = await readFileAsBase64(new Blob([data.buffer], { type: 'video/mp4' }));

        const link = document.createElement('a');
        link.href = dataURL;
        link.setAttribute('download', '');
        link.click();

        onConversionEnd(false);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <Button onClick={convertToGif} className="out__btn">
                <img src={out} alt="GIF 내보내기" />
                <p style={{ color: '#383838', fontSize: 16, fontWeight: 700 }}>GIF 내보내기</p>
            </Button>

            <Button onClick={convertToMp3} className="out__btn">
                <img src={sound} alt="mp3 내보내기" />
                <p style={{ color: '#383838', fontSize: 16, fontWeight: 700 }}>음성 내보내기</p>
            </Button>

            <Button onClick={onCutTheVideo} className="out__btn">
                <img src={download} alt="비디오 보내내기" />
                <p style={{ color: '#383838', fontSize: 16, fontWeight: 700 }}>비디오 저장하기</p>
            </Button>
        </div>
    );
}

export default VideoConversionButton;
