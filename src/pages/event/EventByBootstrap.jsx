import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import styles from './EventByBootstrap.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import evnet_thumb from '../../assets/images/evnet_thumb.png';
import coupon_left from '../../assets/images/event/coupon_left.png';
import coupon_right from '../../assets/images/event/coupon_right.png';
import arrow_left from '../../assets/icons/arrow_left.svg';
import share from '../../assets/icons/share.svg';
import star from '../../assets/icons/star.svg';
import download from '../../assets/icons/download.svg';

import { productList } from './EventByAntd';

export default function EventByBootstrap() {
    const [currentFilter, setCurrentFilter] = useState('남성의류');

    const handleCurrnetFilter = (newFilter) => setCurrentFilter(newFilter);

    return (
        <article className="layout">
            <div>
                <div className={styles.page__style}>
                    <section className={styles.header}>
                        <Link to={'/'}>
                            <button className={styles.header__btn}>
                                <img src={arrow_left} alt="arrow_left" />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>

                        <Link to={'notice'}>
                            <button className={styles.header__btn}>
                                <img src={share} alt="share button" />
                            </button>
                        </Link>
                    </section>

                    <section>
                        <img src={evnet_thumb} alt="event main" className={styles.event__img} />

                        <div gap={16} className={styles.percent__section}>
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
                        </div>
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

                            <div className={styles.top__sales_list}>
                                {productList.map((e, i) => (
                                    <Card style={{ minWidth: 240, borderRadius: 16 }}>
                                        <Card.Img src={e.img} className={styles.product__image} />

                                        <Card.Body style={{ padding: 0 }}>
                                            <div className={styles.product}>
                                                <div className={styles.content}>
                                                    <div>
                                                        <p className={styles.type}>{e.type}</p>
                                                        <h3>{e.productName}</h3>
                                                    </div>

                                                    <div className={styles.price__layout}>
                                                        <p className={styles.percent}>{e.percent}%</p>
                                                        <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>

                            <Button variant="primary" className={styles.show__all__btn}>
                                전체 상품 보기
                            </Button>
                        </div>
                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p>쿠폰 지급 기간 : ~12월 31일까지</p>

                        <div style={{ display: 'flex' }}>
                            <div className={styles.coupon}>
                                <img src={coupon_left} alt="coupon_left" />

                                <div className={styles.coupon__content}>
                                    <p>COUPON</p>
                                    <h4>15%</h4>
                                </div>
                            </div>

                            <div className={styles.coupon}>
                                <img src={coupon_right} alt="coupon_right" />

                                <div className={styles.coupon__download}>
                                    <p>다운받기</p>
                                    <button>
                                        <img src={download} alt="download button" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </article>
    );
}
