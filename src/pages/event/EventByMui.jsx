import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './EventByMui.module.css';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import evnet_thumb from '../../assets/images/evnet_thumb.png';
import coupon_left from '../../assets/images/event/coupon_left.png';
import coupon_right from '../../assets/images/event/coupon_right.png';
import star from '../../assets/icons/star.svg';
import { productList } from './EventByAntd';

const MuiButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 700,
    width: '100%',
    padding: 16,
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#6B0603',
    borderColor: '#6B0603',
    '&:hover': {
        backgroundColor: '#6B0603',
        borderColor: '#6B0603',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#6B0603',
        borderColor: '#6B0603',
    },
    '&:focus': {
        boxShadow: 'none',
    },
});

export default function EventByMui() {
    const [currentFilter, setCurrentFilter] = useState('남성의류');

    const handleCurrnetFilter = (newFilter) => setCurrentFilter(newFilter);

    return (
        <article className="layout">
            <div>
                <div className={styles.page__style}>
                    <Stack justifyContent="space-between" alignItems="center" direction="row" className={styles.header}>
                        <Link to={'/'}>
                            <button className={styles.header__btn}>
                                <ArrowBackIosNewIcon style={{ color: '#383838' }} />
                            </button>
                        </Link>

                        <h1 className={styles.header__title}>크리스마스 특별할인</h1>

                        <Link to={'notice'}>
                            <button className={styles.header__btn}>
                                <FileUploadOutlinedIcon style={{ color: '#383838' }} />
                            </button>
                        </Link>
                    </Stack>

                    <section>
                        <img src={evnet_thumb} alt="event main" className={styles.event__img} />

                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={'16px'}
                            className={styles.percent__section}
                        >
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
                        </Stack>
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

                            <Stack spacing={'16px'} className={styles.top__sales_list} direction="row">
                                {productList.map((e, i) => (
                                    <Card sx={{ minWidth: 240, borderRadius: '16px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={e.img}
                                                alt="product"
                                                className={styles.product__image}
                                            />
                                            <CardContent style={{ padding: 0 }}>
                                                <div className={styles.product}>
                                                    <Stack
                                                        className={styles.content}
                                                        spacing={'8px'}
                                                        alignItems="flex-start"
                                                    >
                                                        <div>
                                                            <p className={styles.type}>{e.type}</p>
                                                            <h3>{e.productName}</h3>
                                                        </div>
                                                        <div className={styles.price__layout}>
                                                            <p className={styles.percent}>{e.percent}%</p>
                                                            <p className={styles.price}>{e.price.toLocaleString()}원</p>
                                                        </div>
                                                    </Stack>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </Stack>
                            <MuiButton variant="contained">전체 상품 보기</MuiButton>
                        </div>
                    </section>

                    <section className={styles.coupon__section}>
                        <h2>
                            어디서든 사용 가능한
                            <br />
                            15% 쿠폰을 드려요!
                        </h2>
                        <p className={styles.coupon__date}>쿠폰 지급 기간 : ~12월 31일까지</p>

                        <Stack direction="row">
                            <div className={styles.coupon}>
                                <img src={coupon_left} alt="coupon_left" />

                                <Stack justifyContent="center" alignItems="center" className={styles.coupon__content}>
                                    <p>COUPON</p>
                                    <h4>15%</h4>
                                </Stack>
                            </div>

                            <div className={styles.coupon}>
                                <img src={coupon_right} alt="coupon_right" />

                                <Stack justifyContent="center" alignItems="center" className={styles.coupon__download}>
                                    <p>다운받기</p>
                                    <button>
                                        <FileDownloadOutlinedIcon style={{ fontSize: 20, color: '#fff' }} />
                                    </button>
                                </Stack>
                            </div>
                        </Stack>
                    </section>
                </div>
            </div>
        </article>
    );
}
