import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../assets/css/global.css'
import styles from './bookmark.module.scss';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import SidebarHome from '../../components/SidebarHome/SidebarHome';

function Bookmark(){
    return(
    <div id={styles.app}>
        <HeaderHome />
        <div className={styles.appWithSidebar} >
            <SidebarHome />
            <main id={styles.main}>
                <h1>Trang Bài học đã lưu</h1>
            </main>
        </div>
        <ScrollTop />
        <FooterHome />
    </div>
    )
}
export default Bookmark