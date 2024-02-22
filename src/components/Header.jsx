import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/icons/logo.svg';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div className="layout">
                <div className={styles.header__contents}>
                    <Link to="/">
                        <img src={logo} alt="logo button" />
                    </Link>

                    <div className={styles.header__links}>
                        <a href="/">
                            <p data-active={pathname === '/'}>비디오 편집</p>
                        </a>
                        <Link to="/photo">
                            <p data-active={pathname === '/photo'}>이미지 편집</p>
                        </Link>
                        <Link to="/login">
                            <p data-active={pathname === '/login'}>로그인</p>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
