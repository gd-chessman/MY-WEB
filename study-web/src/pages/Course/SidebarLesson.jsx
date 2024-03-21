import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './sidebarLesson.module.scss'

function SidebarCourse(){
    const [lessons, setLessons] = useState([]);
    const { courseName } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/course/${courseName}`)
          .then(response => response.json())
          .then(data => setLessons(data))
          .catch(error => console.error('Error fetching data:', error));
      }, [courseName]);

    return(
        <div id={styles.frameSidebar}>
        <div className={styles.sidebarCourse}>
            <div>
            <h1>Bài học</h1>
            <ul>
                {lessons.map(lesson => (
                <li key={lesson.id}>
                    <h3>{lesson.title}</h3>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    )
}
export default SidebarCourse;