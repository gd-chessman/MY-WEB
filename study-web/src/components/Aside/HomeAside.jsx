import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './homeAside.css'

function HomeAside(){
    return (
    <aside className="homeSidebar">
      <NavLink exact to="/" activeClassName="active">
        <div className='content'>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <small>Trang chủ</small>
        </div>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <div className='content'>
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
            <small>Hồ sơ</small>
        </div>
      </NavLink>
      <NavLink to="/bookmark" activeClassName="active">
        <div className='content'>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M352 48H160a48 48 0 00-48 48v368l144-128 144 128V96a48 48 0 00-48-48z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <small>Bài đã lưu</small>
        </div>
      </NavLink>
      <NavLink to="/chatai" activeClassName="active">
        <div className='content ai'>
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><circle cx="160" cy="216" r="32"/><circle cx="256" cy="216" r="32"/><circle cx="352" cy="216" r="32"/></svg>
            <small>Chat AI</small>
        </div>
      </NavLink>
      <NavLink to="/extension" activeClassName="active">
        <div className='content'>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <small>Tiện ích</small>
        </div>
      </NavLink>
        <div style={{width:'80%',margin: 'auto'}}>
            <hr />
        </div>
        <div className='content bottom'>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon-aside" viewBox="0 0 512 512"><path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            <small>Đăng xuất</small>
        </div>
        {/* <div className='content'>

        </div> */}
    </aside>  
    )
}
export default HomeAside;