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
                <NavLink exact to="/admin/dashboard" activeClassName="active">
                    <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        <small>Dashboard</small>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/users" activeClassName="active">
                    <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        <small>User</small>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/courses" activeClassName="active">
                    <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        <small>Dashboard</small>
                    </div>
                </NavLink>
                <NavLink exact to="/admin/lesson" activeClassName="active">
                    <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                        <small>Dashboard</small>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default SidebarAdmin;