import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import styles from './EventNoticeByBootstrap.module.css';
import { commentList } from './EventNoticeByAntd';
import 'bootstrap/dist/css/bootstrap.min.css';

import notice_result from '../../assets/images/event/notice_result.png';
import leeshop from '../../assets/icons/leeshop.svg';
import search from '../../assets/icons/search.svg';
import menu from '../../assets/icons/menu.svg';
import heart from '../../assets/icons/heart.svg';
import comment from '../../assets/icons/comment.svg';
import more from '../../assets/icons/more.svg';
import bootStrapLogo from '../../assets/icons/bootStrapLogo.svg';

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
                        <Link to={'/event/bootstrap'}>
                            <button className={styles.header__btn}>
                                <img src={leeshop} alt="leeshop" />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>공지사항</h1>

                        <div style={{ display: 'flex', gap: 16 }}>
                            <button className={styles.header__btn}>
                                <img src={search} alt="search button" />
                            </button>

                            <button className={styles.header__btn}>
                                <img src={menu} alt="menu button" />
                            </button>
                        </div>
                    </section>

                    <section className={styles.notice__section}>
                        <p className={styles.subtitle}>이벤트 당첨자 안내</p>
                        <h2 className={styles.title}>12월 24일 크리스마스 이벤트 응모 추첨 당첨자 안내</h2>

                        <hr style={{ border: '1px solid #EAEAEA' }} />

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

                    <hr style={{ border: '3.5px solid #EAEAEA' }} />

                    <section className={styles.comment__section}>
                        <div className={styles.comment__header}>
                            <div>
                                <div style={{ display: 'flex', gap: 4 }}>
                                    <p>댓글</p>
                                    <p className={styles.comment__amount}>4개</p>
                                </div>
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

                        <hr style={{ border: '1px solid #EAEAEA' }} />

                        <div>
                            {commentList.map((e) => (
                                <div className={styles.comment__card}>
                                    <Comment data={e} />
                                    <div style={{ marginLeft: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        {e.reply.map((x) => (
                                            <Comment data={x} isReply />
                                        ))}
                                    </div>

                                    <Form.Control
                                        value=""
                                        placeholder="답글을 입력해주세요."
                                        onClick={() => handleCommentToggle(true)}
                                        className={styles.comment__input__field}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {commentToggle && (
                    <section className={styles.comment__input}>
                        <hr style={{ border: '1px solid #EAEAEA' }} />

                        <div style={{ padding: '8px 16px' }}>
                            <Form.Control
                                placeholder="답글을 입력해주세요."
                                style={{ background: '#F6F6F6' }}
                                className={styles.comment__input__field}
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
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: 32,
                            border: '1px solid #EAEAEA',
                            padding: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src={bootStrapLogo} alt="user icon" style={{ width: '100%' }} />
                    </div>
                    <p className={styles.user__name}>{data.userName}</p>
                </div>
                <img src={more} alt="more button" />
            </div>

            <p className={styles.comment}>{data.comment}</p>

            <div className={styles.comment__info} data-reply={isReply} style={{ display: 'flex', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                    <img src={heart} alt="좋아요 버튼" />
                    <p>좋아요</p>
                    <p>{data.like.toLocaleString()}</p>
                </div>

                {!isReply && (
                    <div style={{ display: 'flex', gap: 2 }}>
                        <img src={comment} alt="답글 버튼" />

                        <p>답글</p>
                        <p>{data.reply.length.toLocaleString()}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
