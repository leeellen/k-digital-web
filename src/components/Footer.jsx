import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo_white from '../assets/icons/logo_white.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="layout">
                <section className={styles.footer__contents}>
                    <Link to="/">
                        <img src={logo_white} alt="logo button" />
                    </Link>

                    <div className={styles.footer__links}>
                        <Link to="/">
                            <p>비디오 편집</p>
                        </Link>
                        <Link to="/photo">
                            <p>이미지 편집</p>
                        </Link>
                        <Link to="/login">
                            <p>로그인</p>
                        </Link>
                    </div>
                </section>

                <section className={styles.footer__info}>
                    <div>
                        <label>Tel.</label>
                        <p>02-2023-2024</p>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <p>iedong@naver.com</p>
                    </div>
                </section>
            </div>
        </footer>
    );
}
