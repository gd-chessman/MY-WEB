import styles from './signup.module.scss';
import { Link } from 'react-router-dom';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import HomeAside from '../../components/Aside/HomeAside';

function Signup(){
    return(
        <div id={styles.app}>
        <HeaderHome />
        <div className={styles.appWithSidebar} >
            <HomeAside />
            <main id={styles.main}>
                <div className={styles.loginBox}>
                <p>Đăng ký</p>
                <form>
                    <div className={styles.userBox}>
                    <input required="" name="" type="text" />
                    <label>Nhập tên của bạn</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required="" name="" type="text" />
                    <label>Email hoặc số điện thoại</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required="" name="" type="password" />
                    <label>Mật khẩu</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required="" name="" type="password" />
                    <label>Nhập lại mật khẩu</label>
                    </div>
                    <a href="#">
                    <span />
                    <span />
                    <span />
                    <span />
                    Đăng ký
                    </a>
                </form>
                <p>
                    Bạn đã có tài khoản?{" "}
                    <Link to="/login" className={styles.a2}>
                    Đăng nhập
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
export default Signup