import styles from './headerHome.module.scss';
import avartar from '../../assets/icons/avatar.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

function HeaderHome(){

    const [sidebar, setSibar] = useState(false)
    var body = document.querySelector("body")
    if(sidebar == true){
      body.style.overflow ="hidden";
    }else{
      body.style.overflow ="auto";
    }

    return(
        <header id={styles.header}>
        <div className={styles.headerTop}>
            <nav className={styles.navLinkHeader}>
                <ul className={styles.nav}>
                    <li className={styles.logo}><a href="/"><img src={avartar} width="32px" style={{ borderRadius: 4 }} alt=""/>&nbsp;Chessman</a></li>
                    <li>
                        <p>Dịch&nbsp;vụ</p>
                        <div className={styles.navService}>
                            <a href="https://web.levanquy.com/">Lập trình Web</a>
                            <a href="https://mobile.levanquy.com/">Lập trình Mobile</a>
                            <a href="https://embedded.levanquy.com/">Lập trình Nhúng</a>
                        </div>
                    </li>
                    <li><a href="">Tin&nbsp;tức</a></li>
                    <li>
                        <div className={styles.group}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSearch}>
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input className={styles.inputDesktop} type="search" placeholder="Tìm kiếm"/>
                        </div>
                    </li>
                    <li><a href="">Hỏi&nbsp;đáp</a></li>
                    <li>
                        <Link to="/login">Tài khoản</Link>
                    </li>
                    <li onClick={() => setSibar(!sidebar)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="32px" height="32px" color='#cbd5e1' style={{ cursor: 'pointer' }}>
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/>
                        </svg>
                    </li>             
                </ul>
            </nav>
        </div>
        {sidebar && <SidebarMenu />}
            {sidebar && 
                <div>
                    <button onClick={()=>setSibar(!sidebar)} className={styles.sidebarClose}>X</button>
                </div>
            }
    </header>   
    )
}
export default HeaderHome;