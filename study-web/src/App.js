import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import Course from './pages/Course/Course';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Bookmark from './pages/Bookmark/Bookmark';
import ChatAi from './pages/ChatAI/ChatAi';
import Extension from './pages/Extension/Extension';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course/:courseName" element={<Course />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/chatai' element={<ChatAi />} />
        <Route path='/extension' element={<Extension />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  );
}

export default App;
