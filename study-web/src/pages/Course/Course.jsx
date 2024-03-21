import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './course.module.scss'
import avartar from '../../assets/icons/avatar.png';
import SidebarCourse from './SidebarLesson';


function Course(){
  const [lessons, setLessons] = useState([]);
  const { courseName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/course/${courseName}`)
      .then(response => response.json())
      .then(data => setLessons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [courseName]);
  

  //Sidebar của khóa học
  const [sidebar, setSibar] = useState(false)
  var body = document.querySelector("body")
  if(sidebar == true){
    body.style.overflow ="hidden";
  }else{
    body.style.overflow ="auto";
  }
    return(
        <div id={styles.app}>
        {/* Make Header */}
        <header id={styles.header}>
          <div className={styles.headerTop}>
            <nav className={styles.navLinkHeader}>
              <ul className={styles.nav}>
                <li className={styles.logo}>
                  <a href="/">
                    <img
                      src={avartar}
                      width="32px"
                      style={{ borderRadius: 4 }}
                    />
                    &nbsp;Chessman
                  </a>
                </li>
                <li>
                  <a href="#!">Cài đặt</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Make Main */}
        <main id={styles.main}>
          <h2 style={{ color: "rgb(0, 0, 164)", textAlign: "center" }}>
            1. Tổng quan Spring MVC
          </h2>
          
          <div>
            <h4>Nội dung bài học</h4>
            <ul>
              {lessons.map(lesson => (
                <li key={lesson.id}>
                  <h3>{lesson.title}</h3>
                  <p>{lesson.content}</p>
                  <p><strong>Course:</strong> {lesson.course.name}</p>
                </li>
              ))}
            </ul>
          </div>

        </main>
        {sidebar && <SidebarCourse />}
        {/* Make footer */}
        <footer id={styles.footer}>
          <nav className={styles.navFooter}>
            <ul>
              <li>Hỏi đáp</li>
            </ul>
            <ul>
              <li>
                <button>Bài trước</button>
              </li>
              <li>
                <button>Bài tiếp theo</button>
              </li>
            </ul>
            <ul>
              <li onClick={()=>setSibar(!sidebar)}><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="32px" height="32px" color='#cbd5e1'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg></li>
            </ul>
          </nav>
        </footer>
      </div>      
    )
}
export default Course