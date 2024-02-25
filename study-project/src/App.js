import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import Course from './pages/Course';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<Course />} />
      </Routes>
  );
}

export default App;
