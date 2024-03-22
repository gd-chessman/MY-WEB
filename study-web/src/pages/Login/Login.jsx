import styles from './login.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import HomeAside from '../../components/Aside/HomeAside';

function Login(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div id={styles.app}>
        <HeaderHome />
        <div className={styles.appWithSidebar} >
            <HomeAside />
            <main id={styles.main}>
                <div className={styles.loginBox}>
                <p>Đăng nhập</p>
                <form>
                    <div className={styles.userBox}>
                    <input required name="" type="text" />
                    <label>Địa chỉ email</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required name="" type="password" />
                    <label>Mật khẩu</label>
                    </div>
                    <div className={styles.forgetPass}>Quên mật khẩu!</div>
                    <a href="#">
                    <span />
                    <span />
                    <span />
                    <span />
                    Đăng nhập
                    </a>
                </form>
                <p>
                    Bạn chưa có tài khoản?{" "}
                    <Link to="/signup" className={styles.a2}>
                    Đăng ký!
                    </Link>
                </p>
                </div>      
            </main>
        </div>
        <ScrollTop />
        <FooterHome />
    </div>

    )
}
export default Login