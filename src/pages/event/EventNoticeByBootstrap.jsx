import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, ConfigProvider, Divider, Flex, Input, Space } from 'antd';
import {
    HeartOutlined,
    MenuOutlined,
    MessageOutlined,
    MoreOutlined,
    SearchOutlined,
    UserOutlined,
} from '@ant-design/icons';
import styles from './EventNoticeByAntd.module.css';

import notice_result from '../../assets/images/event/notice_result.png';
import leeshop from '../../assets/icons/leeshop.svg';

const commentList = [
    {
        id: '6213dbc0-de02-4938-87c8-2a982fe6fc2e',
        img: 'http://dummyimage.com/202x100.png/ff4444/ffffff',
        userName: 'Raul Labadini',
        comment:
            'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        like: 1,
        reply: [
            {
                img: 'http://dummyimage.com/202x100.png/ff4444/ffffff',
                userName: 'Raul Labadini',
                comment:
                    'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                like: 1,
            },
            {
                img: 'http://dummyimage.com/202x100.png/ff4444/ffffff',
                userName: 'Raul Labadini',
                comment:
                    'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                like: 1,
            },
            {
                img: 'http://dummyimage.com/202x100.png/ff4444/ffffff',
                userName: 'Raul Labadini',
                comment:
                    'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
                like: 1,
            },
        ],
    },
    {
        id: 'b1d273f2-579d-4ebc-a281-0687c855d9f2',
        img: 'http://dummyimage.com/208x100.png/dddddd/000000',
        userName: 'Kristel Rojel',
        comment:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
        like: 2,
        reply: [],
    },
    {
        id: '70d562d8-35d2-4929-b1ed-e8fe90692904',
        img: 'http://dummyimage.com/119x100.png/cc0000/ffffff',
        userName: 'Kerby Brabban',
        comment:
            'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        like: 3,
        reply: [],
    },
    {
        id: '9fafd240-204c-48b0-902b-48addf3db977',
        img: 'http://dummyimage.com/225x100.png/dddddd/000000',
        userName: 'Latisha Muzzillo',
        comment: 'Suspendisse potenti. In eleifend quam a odio.',
        like: 4,
        reply: [],
    },
    {
        id: '5d5b61de-855a-4929-97ef-1c32a0d51820',
        img: 'http://dummyimage.com/221x100.png/ff4444/ffffff',
        userName: 'Obed Maior',
        comment:
            'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
        like: 5,
        reply: [],
    },
    {
        id: '674a28b7-4dfc-4de1-bc46-b0864bf3333e',
        img: 'http://dummyimage.com/149x100.png/dddddd/000000',
        userName: 'Herbert Van den Hof',
        comment: 'Suspendisse potenti.',
        like: 6,
        reply: [],
    },
    {
        id: 'a3a7461a-0a3d-4bea-a5f0-fab552b4c727',
        img: 'http://dummyimage.com/145x100.png/5fa2dd/ffffff',
        userName: 'Sheilakathryn Guppie',
        comment:
            'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
        like: 7,
        reply: [],
    },
    {
        id: '0e6e9103-81a8-4cc8-8c26-9412230f18ae',
        img: 'http://dummyimage.com/197x100.png/5fa2dd/ffffff',
        userName: 'Anabella Macieja',
        comment:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
        like: 8,
        reply: [],
    },
    {
        id: 'b045b68d-dbbc-4d64-8d2b-b629e02f9558',
        img: 'http://dummyimage.com/220x100.png/dddddd/000000',
        userName: 'Bartie Wimlett',
        comment:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        like: 9,
        reply: [],
    },
    {
        id: '13bbae99-8d69-48d8-a452-73de401ce131',
        img: 'http://dummyimage.com/144x100.png/dddddd/000000',
        userName: 'Pancho Gregol',
        comment: 'Duis at velit eu est congue elementum.',
        like: 10,
        reply: [],
    },
];

export default function EventNoticeByAntd() {
    const commentRef = useRef(null);
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
                                <SearchOutlined style={{ fontSize: 22, color: '#383838' }} />
                            </button>

                            <button className={styles.header__btn}>
                                <MenuOutlined style={{ fontSize: 22, color: '#383838' }} />
                            </button>
                        </Space>
                    </section>

                    <section className={styles.notice__section}>
                        <p className={styles.subtitle}>이벤트 당첨자 안내</p>
                        <h2 className={styles.title}>12월 24일 크리스마스 이벤트 응모 추첨 당첨자 안내</h2>

                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSplit: '#EAEAEA',
                                },
                                components: {
                                    Divider: {
                                        marginLG: 0,
                                    },
                                },
                            }}
                        >
                            <Divider />
                        </ConfigProvider>

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

                    <ConfigProvider
                        theme={{
                            token: {
                                colorSplit: '#FAFAFA',
                                lineWidth: 7,
                            },
                            components: {
                                Divider: {
                                    marginLG: 0,
                                },
                            },
                        }}
                    >
                        <Divider />
                    </ConfigProvider>

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

                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSplit: '#EAEAEA',
                                },
                                components: {
                                    Divider: {
                                        marginLG: 0,
                                    },
                                },
                            }}
                        >
                            <Divider />
                        </ConfigProvider>

                        <div>
                            {commentList.map((e) => (
                                <Flex vertical align="flex-start" gap={16} className={styles.comment__card}>
                                    <Comment data={e} />
                                    <Flex vertical gap={16} style={{ marginLeft: 24 }}>
                                        {e.reply.map((x) => (
                                            <Comment data={x} isReply />
                                        ))}
                                    </Flex>

                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorBorder: '#EAEAEA',
                                                controlHeight: 40,
                                                borderRadius: 20,
                                                colorPrimary: '#FF6B3C',
                                            },
                                            Input: {},
                                        }}
                                    >
                                        <Input
                                            value=""
                                            placeholder="답글을 입력해주세요."
                                            onClick={() => handleCommentToggle(true)}
                                        />
                                    </ConfigProvider>
                                </Flex>
                            ))}
                        </div>
                    </section>
                </div>

                {commentToggle && (
                    <section className={styles.comment__input}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSplit: '#EAEAEA',
                                },
                                components: {
                                    Divider: {
                                        marginLG: 0,
                                    },
                                },
                            }}
                        >
                            <Divider />
                        </ConfigProvider>

                        <div style={{ padding: '8px 16px' }}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorBorder: '#EAEAEA',
                                        controlHeight: 40,
                                        borderRadius: 22,
                                        colorPrimary: '#FF6B3C',
                                        colorBgContainer: '#F6F6F6',
                                        colorText: '#A8A8A8',
                                        fontSize: 16,
                                        fontWeight: 500,
                                    },
                                }}
                            >
                                <Input placeholder="답글을 입력해주세요." onClick={() => handleCommentToggle(true)} />
                            </ConfigProvider>
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}

function Comment({ data, isReply }) {
    return (
        <div>
            <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                <Space style={{ marginBottom: 4 }}>
                    <Avatar icon={<UserOutlined />} />
                    <p className={styles.user__name}>{data.userName}</p>
                </Space>
                <MoreOutlined rotate={90} />
            </Flex>

            <p className={styles.comment}>{data.comment}</p>

            <Space className={styles.comment__info} data-reply={isReply}>
                <Space size={2}>
                    <HeartOutlined style={{ fontSize: 12, color: '#A8A8A8' }} />
                    <p>좋아요</p>
                    <p>{data.like.toLocaleString()}</p>
                </Space>

                {!isReply && (
                    <Space size={2}>
                        <MessageOutlined style={{ fontSize: 12, color: '#A8A8A8' }} />
                        <p>답글</p>
                        <p>{data.reply.length.toLocaleString()}</p>
                    </Space>
                )}
            </Space>
        </div>
    );
}
