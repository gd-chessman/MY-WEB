import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Course() {
  const [lessons, setLessons] = useState([]);
  const { courseName } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/course/${courseName}`)
      .then(response => response.json())
      .then(data => setLessons(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [courseName]);

  return (
    <div>
      <h1>{courseName} Lessons</h1>
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
  );
}

export default Course;
