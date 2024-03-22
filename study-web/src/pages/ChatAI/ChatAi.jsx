import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../assets/css/global.css'
import styles from './chatai.module.scss';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import HomeAside from '../../components/Aside/HomeAside';

function ChatAi(){
    return(
        <div id={styles.app}>
        <HeaderHome />
        <div className={styles.appWithSidebar} >
            <HomeAside />
            <main id={styles.main}>
                <h1>Trang Chat với Trí tuệ nhân tạo</h1>
            </main>
        </div>
        <ScrollTop />
        <FooterHome />
    </div>
    )
}
export default  ChatAi