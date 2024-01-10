import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, ConfigProvider, Flex } from 'antd';
import { DownloadOutlined, LeftOutlined, UploadOutlined } from '@ant-design/icons';
import styles from './EventByAntd.module.css';

import evnet_thumb from '../../assets/images/evnet_thumb.png';
import product1 from '../../assets/images/event/products/product1.png';
import product2 from '../../assets/images/event/products/product2.png';
import coupon_left from '../../assets/images/event/coupon_left.png';
import coupon_right from '../../assets/images/event/coupon_right.png';
import star from '../../assets/icons/star.svg';

export const productList = [
    { img: product1, type: '셔츠/블라우스', productName: '데일리 베이직 셔츠 (7color)', percent: 50, price: 50000 },
    { img: product2, type: '셔츠/블라우스', productName: '스탠다드 블루종 스웨이드 자켓', percent: 50, price: 100000 },
    { img: product1, type: '셔츠/블라우스', productName: '데일리 베이직 셔츠 (7color)', percent: 50, price: 50000 },
    { img: product2, type: '셔츠/블라우스', productName: '스탠다드 블루종 스웨이드 자켓', percent: 50, price: 100000 },
];

export default function EventByAntd() {
    const [currentFilter, setCurrentFilter] = useState('남성의류');

    const handleCurrnetFilter = (newFilter) => setCurrentFilter(newFilter);

    return (
        <article className="layout">
            <div>
                <div className={styles.page__style}>
                    <Flex justify="space-between" align="center" className={styles.header}>
                        <Link to={'/'}>
                            <button className={styles.header__btn}>
                                <LeftOutlined style={{ fontSize: 22, color: '#383838' }} />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>

                        <Link to={'notice'}>
                            <button className={styles.header__btn}>
                                <UploadOutlined style={{ fontSize: 22, color: '#383838' }} />
                            </button>
                        </Link>
                    </Flex>

                    <section>
                        <img src={evnet_thumb} alt="event main" className={styles.event__img} />

                        <Flex vertical justify="center" align="center" gap={16} className={styles.percent__section}>
                            <div className={styles.percent}>
                                <img src={star} alt="percent start" />
                                <h2>50%</h2>
                            </div>

                            <h3>
                                고객 여러분들을 위해 다양한
                                <br />
                                <span>최대 50%</span> 할인 상품들을 준비했어요!
                                <br />이 기회를 놓치지 마세요!
                            </h3>
                        </Flex>
                    </section>

                    <section>
                        <ul className={styles.filter__list}>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '남성의류'}
                                onClick={() => handleCurrnetFilter('남성의류')}
                            >
                                남성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '여성의류'}
                                onClick={() => handleCurrnetFilter('여성의류')}
                            >
                                여성의류
                            </li>
                            <li
                                className={styles.filter__btn}
                                data-active={currentFilter === '가전제품'}
                                onClick={() => handleCurrnetFilter('가전제품')}
                            >
                                가전제품
                            </li>
                        </ul>

                        <div className={styles.top__sales}>
                            <h2>실시간 인기 TOP5</h2>

                            <Flex gap={16} className={styles.top__sales_list}>
                                {productList.map((e, i) => (
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                paddingLG: 0,
                                            },
                                        }}
                                    >
                                        <Card
                                            cover={<img alt="product" src={e.img} className={styles.product__image} />}
                                        >
                                            <div className={styles.product}>
                                                <Flex className={styles.content} vertical gap={8} align="flex-start">
                                                    <div>
                                                        <p className={styles.type}>{e.type}</p>
                                                        <h3>{e.productName}</h3>
                                                    </div>
                                                    <div className={styles.price__layout}>
                                                        <p className={styles.percent}>{e.percent}%</p>
                                                        <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                                    </div>
                                                </Flex>
                                            </div>
                                        </Card>
                                    </ConfigProvider>
                                ))}
                            </Flex>

                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#6B0603',
                                        borderRadius: 8,
                                        controlHeight: 56,
                                    },
                                    components: {
                                        Button: {
                                            fontSize: 16,
                                            fontWeight: 700,
                                        },
                                    },
                                }}
                            >
                                <Button type="primary" block>
                                    전체 상품 보기
                                </Button>
                            </ConfigProvider>
                        </div>
                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p className={styles.coupon__date}>쿠폰 지급 기간 : ~12월 31일까지</p>

                        <Flex>
                            <div className={styles.coupon}>
                                <img src={coupon_left} alt="coupon_left" />

                                <Flex vertical justify="center" align="center" className={styles.coupon__content}>
                                    <p>COUPON</p>
                                    <h4>15%</h4>
                                </Flex>
                            </div>

                            <div className={styles.coupon}>
                                <img src={coupon_right} alt="coupon_right" />

                                <Flex vertical justify="center" align="center" className={styles.coupon__download}>
                                    <p>다운받기</p>
                                    <button>
                                        <DownloadOutlined style={{ fontSize: 20, color: '#fff' }} />
                                    </button>
                                </Flex>
                            </div>
                        </Flex>
                    </section>
                </div>
            </div>
        </article>
    );
}
