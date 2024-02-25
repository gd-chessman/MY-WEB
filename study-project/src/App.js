import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import Course from './pages/Course';
// import './App.css';

function App() {
  return (
      <Routes>
        <Route path="https://gd-chessman.github.io/MY-WEB/" element={<HomePage />} />
        <Route path="/course" element={<Course />} />
      </Routes>
  );
}

export default App;
