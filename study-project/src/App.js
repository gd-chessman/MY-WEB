import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import Course from './pages/Course';
// import './App.css';

function App() {
  return (
      <Routes>
        <Route path="levanquy.com" element={<HomePage />} />
        <Route path="levanquy.com/course" element={<Course />} />
      </Routes>
  );
}

export default App;
