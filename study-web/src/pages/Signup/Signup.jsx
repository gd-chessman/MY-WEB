import styles from './signup.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import HomeAside from '../../components/Aside/HomeAside';

function Signup(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return(
        <div id={styles.app}>
        <HeaderHome />
        <div className={styles.appWithSidebar} >
            <HomeAside />
            <main id={styles.main}>
                <div className={styles.signupBox}>
                <p>Đăng ký</p>
                <form>
                    <div className={styles.userBox}>
                    <input required name="" type="text" />
                    <label>Nhập tên của bạn</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required name="" type="text" />
                    <label>Nhập địa chỉ Email</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required name="" type="password" />
                    <label>Nhập mật khẩu</label>
                    </div>
                    <div className={styles.userBox}>
                    <input required name="" type="text"  />
                    <label>Nhập mã xác nhận</label>
                    </div>
                    <div className={styles.forgetPass}>Gửi mã xác nhận!</div>
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