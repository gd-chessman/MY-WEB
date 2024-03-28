import styles from './footerHome.module.scss';
import fbIcon from '../../assets/icons/facebook.png';
import zaloIcon from '../../assets/icons/icons8-zalo-480.png';
import tiktokIcon from '../../assets/icons/tiktok.png';
import youtubeIcon from '../../assets/icons/youtube.png';

function FooterHome(){
    return(
    <footer id={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h3>Le Van Quy</h3>
                <ul>
                    <li>Điện thoại: <a href="tel: 0382787721">0382787721</a></li>
                    <li>Email: <a href="mailto: vannn.quy@gmail.com">vannn.quy@gmail.com</a></li>
                    <li>Địa chỉ: Đà Nẵng - Việt Nam</li>
                    <li>Công việc: Là lập trình viên</li>
                    <li><a href="https://levanquy.com" target="_blank">Portfolio Admin</a></li>
                </ul>
            </div>
            <div className={styles.footerContent}>
                <h3>Thông tin web</h3>
                <ul>
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Liên hệ</a></li>
                    <li><a href="">Điều khoản & Bảo mật</a></li>
                    <li><a href="">Góp ý</a></li>
                </ul>
            </div>
            <div className={styles.footerContent}>
                <h3>Sản phẩm</h3>
                <ul>
                    <li><a href="">Project 1</a></li>
                    <li><a href="">Project 2</a></li>
                    <li><a href="">Project 3</a></li>
                    <li><a href="">Project 4</a></li>
                </ul>
            </div>
            <div className={styles.footerContent}>
                <h3>Liên kết</h3>
                <ul className={styles.linkInfor}>
                    <li><a href="https://www.facebook.com/LeVanQuy0101" target="_blank"><img src={fbIcon} alt=""/></a></li>
                    <li><a href="https://zalo.me/0859737366" target="_blank"><img src={zaloIcon} alt=""/></a></li>
                    <li><a href="https://www.tiktok.com/@gd_chessman" target="_blank"><img src={tiktokIcon} alt=""/></a></li>
                    <li><a href="https://www.youtube.com/@GD_Chessman" target="_blank"><img src={youtubeIcon} alt=""/></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <p>&copy; Trang web công nghệ được phát triển bởi LE&nbsp;VAN&nbsp;QUY</p>
        </div>
    </footer>
    )
}
export default FooterHome;