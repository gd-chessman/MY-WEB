import {Link } from 'react-router-dom';
import './home.css'
function Home(){
    return(
        <div id="app">
        <header id="header">
            <div class="header-top"> 
                <nav class="nav-link-header">
                    <ul class="nav">
                        <li class="logo"><a href="/"><img src="./src/assets/favicon/android-icon-144x144.png" width="32px"/>&nbsp;Chessman</a></li>
                        <li><a href="">Tin tức - Thủ thuật</a></li>
                        <li>
                            <div class="group">
                                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon-search">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                                <input class="input-desktop" type="search" placeholder="Search"/>
                            </div>
                        </li>
                        <li><a href="">Hỏi đáp</a></li>
                        <li><a href="./login.html">Tài khoản</a></li>
                        <li class="menu"><button class="button-menu" id="openModalBtn"><img src="./src/assets/icons/menu-bar.png" alt="" class="icon-size"/></button></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div id="sliderImage">
            <div class="slider">
                <div class="list">
                    <div class="item">
                        <img src="/src/assets/img/img1.gif" alt=""/>
                    </div>
                    <div class="item">
                        <img src="/src/assets/img/img2.png" alt=""/>
                    </div>
                    <div class="item">
                        <img src="/src/assets/img/img3.png" alt=""/>
                    </div>
                    <div class="item">
                        <a href="https://levanquy0101.github.io/My-Portfolio/" target="_blank">
                            <img src="/src/assets/img/img4.png" alt=""/>
                        </a>    
                    </div>
                    <div class="item">
                        <img src="/src/assets/img/img5.png" alt=""/>
                    </div>
                </div>
                <div class="buttons">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <ul class="dots">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
    
        </div>
        <main id="main">
            <aside>
    
            </aside>
            <div class="container">
                <h2>Khóa học tại CodeGym</h2>
                <div class="course">
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/img/item8.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module1</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/img/item9.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module2</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/img/item10.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module3</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <Link to = "/course">
                            <figure>
                                <img src="./src/assets/img/item11.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module4</figcaption>
                        </Link>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/img/item12.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module5</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/img/item8.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>Module6</figcaption>
                        </a>
                    </div>
                </div>
                <h2>Khóa học lẻ</h2>
                <div class="course">
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/icons/html.png" alt="" width="100%"/>
                            </figure>
                            <figcaption>HTML</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/icons/css.jpg" alt="" width="100%"/>
                            </figure>
                            <figcaption>CSS</figcaption>
                        </a>
                    </div>
                    <div class="nameCourse">
                        <a href="">
                            <figure>
                                <img src="./src/assets/icons/javascript.png" alt="" width="100%"/>
                            </figure>
                            <figcaption>Javascript</figcaption>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer id="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <h3>Le Van Quy</h3>
                    <ul>
                        <li>Điện thoại: <a href="tel: 0382787721">0382787721</a></li>
                        <li>Email: <a href="mailto: vannn.quy@gmail.com">vannn.quy@gmail.com</a></li>
                        <li>Địa chỉ: Đà Nẵng - Việt Nam</li>
                        <li>Công việc: Là lập trình viên</li>
                        <li><a href="https://levanquy.com" target="_blank">Portfolio Admin</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Thông tin web</h3>
                    <ul>
                        <li><a href="">Giới thiệu</a></li>
                        <li><a href="">Liên hệ</a></li>
                        <li><a href="">Điều khoản & Bảo mật</a></li>
                        <li><a href="">Góp ý</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Sản phẩm</h3>
                    <ul>
                        <li><a href="">Project 1</a></li>
                        <li><a href="">Project 2</a></li>
                        <li><a href="">Project 3</a></li>
                        <li><a href="">Project 4</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Liên kết</h3>
                    <ul class="link-infor">
                        <li><a href="https://www.facebook.com/LeVanQuy0101" target="_blank"><img src="./src/assets/icons/facebook.png" alt=""/></a></li>
                        <li><a href="zalo.html" target="_blank"><img src="./src/assets/icons/icons8-zalo-480.png" alt=""/></a></li>
                        <li><a href="https://www.tiktok.com/@gd_chessman" target="_blank"><img src="./src/assets/icons/tiktok.png" alt=""/></a></li>
                        <li><a href="time.html" target="_blank"><img src="./src/assets/icons/youtube.png" alt=""/></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; Trang web công nghệ được phát triển bởi LE&nbsp;VAN&nbsp;QUY</p>
            </div>
        </footer>
      </div>
    )
}
export default Home