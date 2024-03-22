
import styles from './login.module.scss';

function Login(){
    return(
    
    <div className={styles.loginBox}>
    <p>Đăng nhập</p>
    <form>
        <div className={styles.userBox}>
        <input required="" name="" type="text" />
        <label>Email hoặc số điện thoại</label>
        </div>
        <div className={styles.userBox}>
        <input required="" name="" type="password" />
        <label>Password</label>
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
        <a href="" className={styles.a2}>
        Đăng ký!
        </a>
    </p>
    </div>
    )
}
export default Login