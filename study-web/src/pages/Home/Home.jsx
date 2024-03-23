import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../assets/css/global.css'
import styles from './home.module.scss';

import img1 from '../../assets/img/img1.gif';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';
import item8 from '../../assets/img/item8.png';
import item9 from '../../assets/img/item9.png';
import item10 from '../../assets/img/item10.png';
import item11 from '../../assets/img/item11.png';
import item12 from '../../assets/img/item12.png';
import item13 from '../../assets/img/item13.png';
import hot from '../../assets/icons/hot.png';
import fullStack from '../../assets/icons/fullstack.png';
import frontEnd from '../../assets/icons/frontend.png';
import backEnd from '../../assets/icons/backend.png';
import other from '../../assets/icons/code.png';

import cssIcon from '../../assets/icons/css.jpg';
import jsIcon from '../../assets/icons/javascript.png';
import reactJS from '../../assets/img/react-logo.png';
import bootstrap from '../../assets/img/bootstrap.png';

import HeaderHome from '../../components/Header/HeaderHome';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FooterHome from '../../components/Footer/FooterHome';
import SidebarHome from '../../components/SidebarHome/SidebarHome';

const courses = [
    {
      id: 'full-stack',
      title: 'Khóa học Web FullStack CodeGym',
      modules: [
        { id: 'module1', name: 'Module1', imgSrc: item8, link: '/course/module1' },
        { id: 'module2', name: 'Module2', imgSrc: item9, link: '/course/module2' },
        { id: 'module3', name: 'Module3', imgSrc: item10, link: '/course/module3' },
        { id: 'module4', name: 'Module4', imgSrc: item11, link: '/course/module4' },
        { id: 'module5', name: 'Module5', imgSrc: item12, link: '/course/module5' },
        { id: 'module6', name: 'Module6', imgSrc: item13, link: '/course/module6' },
      ],
    },
    {
      id: 'front-end',
      title: 'Khóa học FrontEnd',
      modules: [
        { id: 'html', name: 'HTML', imgSrc: 'https://topviecit.vn/blog/wp-content/uploads/2021/11/thumb-5.jpg' ,link: '/course/html'},
        { id: 'css', name: 'CSS', imgSrc: cssIcon, link: '/course/css' },
        { id: 'javascript', name: 'Javascript', imgSrc: jsIcon, link: '/course/javascript' },
        { id: 'bootstrap', name: 'Bootstrap', imgSrc: bootstrap, link: '/course/bootstrap' },
        { id: 'reactJS', name: 'ReactJS', imgSrc: reactJS, link: '/course/reactjs' },
        { id: 'vueJS', name: 'VueJS', imgSrc: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/vuejs-and-seo--your-steps-to-take-to-become-more-seo-friendly-317x237.webp', link: '/course/vuejs' },
      ],
    },
    {
      id: 'back-end',
      title: 'Khóa học BackEnd',
      modules: [
        { id: 'nodeJS', name: 'NodeJS', imgSrc: 'https://colorlib.com/wp/wp-content/uploads/sites/2/node.js-logo.png', link: '/course/nodejs' },
        { id: 'java', name: 'Java', imgSrc: 'https://unica.vn/media/imagesck/1624420787_Java-Core-la-gi.jpg?v=1624420787', link: '/course/java' },
      ],
    },
  ];



function Home() {
    // Làm phần xử lý cho chuyển router không kích hoạt JS Home
    let refreshInterval;
    useEffect(() => {
        sliderAnimation()
        // Cần phải trả về 1 hàm mới hoạt động
        return () => {
            clearInterval(refreshInterval);
        };   
        // return clearInterval(refreshInterval) //Cách này không được
    },[]);

    const [sidebar, setSibar] = useState(false)
    var body = document.querySelector("body")
    if(sidebar == true){
      body.style.overflow ="hidden";
    }else{
      body.style.overflow ="auto";
    }

    //Làm phần slider cho trang Home
    function sliderAnimation(){
        let sliderImage = document.getElementById("sliderImage");
        if (sliderImage == null) {
            console.log("ID trong DOM không tồn tại!")
        }else{
            console.log("ID trong DOM có tồn tại!")
            let slider = document.querySelector('.slider .list');
            let items = document.querySelectorAll('.slider .list .item');
            let next = document.getElementById('next');
            let prev = document.getElementById('prev');
            let dots = document.querySelectorAll('.slider .dots li');

            let lengthItems = items.length - 1;
            let active = 0;
            next.onclick = function(){
                active = active + 1 <= lengthItems ? active + 1 : 0;
                reloadSlider();
            }
            prev.onclick = function(){
                active = active - 1 >= 0 ? active - 1 : lengthItems;
                reloadSlider();
            }
            refreshInterval = setInterval(()=> {next.click()}, 3000);

            function reloadSlider(){
                slider.style.left = -items[active].offsetLeft + 'px';
                // 
                let last_active_dot = document.querySelector('.slider .dots li.active');
                last_active_dot.classList.remove('active');
                dots[active].classList.add('active');
                // console.log(dots)
                clearInterval(refreshInterval);
                refreshInterval = setInterval(()=> {next.click()}, 3000);
          
            }

            dots.forEach((li, key) => {
                li.addEventListener('click', ()=>{
                    active = key;
                    reloadSlider();
                })
            })
        }
    }
    return (
        <div id={styles.app}>
            <HeaderHome />
            <div className={styles.appWithSidebar} >
                <SidebarHome />
                <main id={styles.main}>
                <div id="sliderImage">
                    <div className="slider">
                        <div className="list">
                        <div className="item">
                            <img src={img1} alt />
                        </div>
                        <div className="item">
                            <img src={img2} alt />
                        </div>
                        <div className="item">
                            <img src={img3} alt />
                        </div>
                        <div className="item">
                            <a href="https://levanquy0101.github.io/My-Portfolio/" target="_blank">
                            <img src={img4} alt />
                            </a>
                        </div>
                        <div className="item">
                            <img src={img5} alt />
                        </div>
                        </div>
                        <div className="buttons">
                        <button id="prev">&lt;</button>
                        <button id="next">&gt;</button>
                        </div>
                        <ul className="dots">
                        <li className="active" />
                        <li />
                        <li />
                        <li />
                        <li />
                        </ul>
                    </div>
                </div>
                    <div className={styles.listLanguage}>
                        <nav className={styles.navLanguage}>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>NodeJS</li>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Bootstrap</li>
                                <li>Sass</li>
                                <li>ReactJS</li>
                                <li>VueJS</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.menuTop}>
                        <a href="#course-hot" className={styles.navItem}>
                            <div className={styles.boxIcon}>
                                <img src={hot} alt="" width="42px" height="42px" />
                            </div>
                            <p>Khóa Hot</p>
                        </a>
                        <a href="#full-stack" className={styles.navItem}>
                            <div className={styles.boxIcon}>
                                <img src={fullStack} alt="" width="42px" height="42px" />
                            </div>
                            <p>Full Stack</p>
                        </a>
                        <a href="#front-end" className={styles.navItem}>
                            <div className={styles.boxIcon}>
                                <img src={frontEnd} alt="" width="42px" height="42px" />
                            </div>
                            <p>FrontEnd</p>
                        </a>
                        <a href="#back-end" className={styles.navItem}>
                            <div className={styles.boxIcon}>
                                <img src={backEnd} alt="" width="42px" height="42px" />
                            </div>
                            <p>BackEnd</p>
                        </a>
                        <a href="course-other" className={styles.navItem}>
                            <div className={styles.boxIcon}>
                                <img src={other} alt="" width="42px" height="42px" />
                            </div>
                            <p>Khác</p>
                        </a>
                    </div>
                    {/* Code phần thùng chứa khóa học */}
                    <div className={styles.container}>
                    {courses.map(course => (
                        <div key={course.id}  id={course.id}>
                        <h2>{course.title}</h2>
                        <div className={styles.course}>
                            {course.modules.map(module => (
                            <div key={module.id} className={styles.nameCourse}>
                                {module.link ? (
                                <Link to={module.link}>
                                    <figure>
                                    <img src={module.imgSrc} alt={module.name} width="100%" />
                                    </figure>
                                    <figcaption>{module.name}</figcaption>
                                </Link>
                                ) : (
                                <a href="">
                                    <figure>
                                    <img src={module.imgSrc} alt={module.name} width="100%" />
                                    </figure>
                                    <figcaption>{module.name}</figcaption>
                                </a>
                                )}
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>
                </main>
            </div>
            <ScrollTop />
            <FooterHome />
        </div>
    );
}


export default Home;
