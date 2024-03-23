import styles from './sidebarAdmin.module.scss'
import { NavLink } from 'react-router-dom';
function SidebarAdmin(){
    return(
        <div className={styles.sidebar}>
            <div className={styles.top}>
                LE VAN QUY
            </div>
            <hr />
            <div className={styles.center}>
                <NavLink exact to="/admin/dashboard" activeClassName={styles.active}>
                    <div className={styles.content}>
                        <p>Dashboard</p>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/users" activeClassName={styles.active}>
                    <div className={styles.content}>
                        <p>Người dùng</p>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/courses" activeClassName={styles.active}>
                    <div className={styles.content}>
                        <p>Khóa học</p>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/lesson" activeClassName={styles.active}>
                    <div className={styles.content}>
                        <p>Bài học</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default SidebarAdmin;