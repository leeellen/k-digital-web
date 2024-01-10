import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Space } from 'antd';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './EventNoticeByAntd.module.css';

import notice_result from '../../assets/images/event/notice_result.png';
import leeshop from '../../assets/icons/leeshop.svg';
import mui from '../../assets/icons/mui.svg';
import { commentList } from './EventNoticeByAntd';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const CssTextFieldButton = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A8A8A8',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#EAEAEA',
            borderRadius: 20,
        },
        '&:hover fieldset': {
            border: '1px solid #FF6B3C',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #FF6B3C',
        },
    },
});
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A8A8A8',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#EAEAEA',
            borderRadius: 20,
        },
        '&:hover fieldset': {
            border: '1px solid #FF6B3C',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid #FF6B3C',
        },
    },
});

const dividerStyle = {
    borderColor: '#FAFAFA',
};
export default function EventNoticeByAntd() {
    const [commentToggle, setCommentToggle] = useState(false);
    const [currentFilter, setCurrentFilter] = useState('등록순');

    const handleCurrnetFilter = (newFilter) => setCurrentFilter(newFilter);
    const handleCommentToggle = (toggleValue) => setCommentToggle(toggleValue);

    return (
        <article className="layout">
            <div>
                <div className={styles.page__style} onClick={() => handleCommentToggle(!commentToggle)}>
                    <section className={styles.header}>
                        <Link to={'/event/antd'}>
                            <button className={styles.header__btn}>
                                <img src={leeshop} alt="leeshop" />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>공지사항</h1>

                        <Space size={16}>
                            <button className={styles.header__btn}>
                                <SearchIcon style={{ fontSize: 22, color: '#383838' }} />
                            </button>

                            <button className={styles.header__btn}>
                                <MenuIcon style={{ fontSize: 22, color: '#383838' }} />
                            </button>
                        </Space>
                    </section>

                    <section className={styles.notice__section}>
                        <p className={styles.subtitle}>이벤트 당첨자 안내</p>
                        <h2 className={styles.title}>12월 24일 크리스마스 이벤트 응모 추첨 당첨자 안내</h2>

                        <Divider style={dividerStyle} />

                        <div className={styles.notice__content__section}>
                            <img src={notice_result} alt="notice" />

                            <p className={styles.content}>
                                {`안녕하세요. LEESHOP입니다.
크리스마스 이벤트 응모 추첨 당첨자를 발표합니다.
참여해 주셔서 진심으로 감사드립니다.
축하드립니다!

1등(1명)구글플레이 기프티콘 10만원권
김*동 ied****

2등(2명)
구글플레이 기프티콘 5만원권
김*솔 han*******
김*정 win***

3등(3명)구글플레이 기프티콘 3만원권
박*원 Jiw**
차*우 Cha********
강*진 Gha******

당첨을 진심으로 축하드리며 개별 연락을 드릴 예정입니다.`}
                            </p>
                        </div>
                    </section>

                    <Divider style={{ ...dividerStyle, borderWidth: 3.5 }} />

                    <section className={styles.comment__section}>
                        <div className={styles.comment__header}>
                            <div>
                                <Space size={4}>
                                    <p>댓글</p>
                                    <p className={styles.comment__amount}>4개</p>
                                </Space>
                            </div>

                            <ul className={styles.filter__list}>
                                <li
                                    className={styles.filter__btn}
                                    data-active={currentFilter === '등록순'}
                                    onClick={() => handleCurrnetFilter('등록순')}
                                >
                                    등록순
                                </li>
                                <li
                                    className={styles.filter__btn}
                                    data-active={currentFilter === '최신순'}
                                    onClick={() => handleCurrnetFilter('최신순')}
                                >
                                    최신순
                                </li>
                            </ul>
                        </div>

                        <Divider style={dividerStyle} />

                        <div>
                            {commentList.map((e) => (
                                <Stack alignItems="flex-start" gap={'16px'} className={styles.comment__card}>
                                    <Comment data={e} />
                                    <Stack gap={'16px'} style={{ marginLeft: 24 }}>
                                        {e.reply.map((x) => (
                                            <Comment data={x} isReply />
                                        ))}
                                    </Stack>

                                    <CssTextFieldButton
                                        value=""
                                        fullWidth
                                        placeholder="답글을 입력해주세요."
                                        inputProps={{
                                            style: {
                                                padding: '11px 8px',
                                            },
                                        }}
                                    />
                                </Stack>
                            ))}
                        </div>
                    </section>
                </div>

                {commentToggle && (
                    <section className={styles.comment__input}>
                        <Divider style={dividerStyle} />

                        <div style={{ padding: '8px 16px' }}>
                            <CssTextField
                                fullWidth
                                placeholder="답글을 입력해주세요."
                                onClick={() => handleCommentToggle(true)}
                                inputProps={{
                                    style: {
                                        padding: '11px 8px',
                                    },
                                }}
                            />
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}

function Comment({ data, isReply }) {
    return (
        <div style={{ width: '100%' }}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                style={{ width: '100%', marginBottom: 4 }}
                direction="row"
            >
                <Space>
                    <Avatar alt="mui" src={mui} />
                    <p className={styles.user__name}>{data.userName}</p>
                </Space>
                <MoreHorizIcon style={{ fontSize: 24, color: '#707070' }} />
            </Stack>

            <p className={styles.comment}>{data.comment}</p>

            <Space className={styles.comment__info} data-reply={isReply}>
                <Space size={2}>
                    <FavoriteBorderIcon style={{ fontSize: 12, color: '#A8A8A8' }} />
                    <p>좋아요</p>
                    <p>{data.like.toLocaleString()}</p>
                </Space>

                {!isReply && (
                    <Space size={2}>
                        <SmsOutlinedIcon style={{ fontSize: 12, color: '#A8A8A8' }} />
                        <p>답글</p>
                        <p>{data.reply.length.toLocaleString()}</p>
                    </Space>
                )}
            </Space>
        </div>
    );
}
