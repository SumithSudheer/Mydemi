import Home from './pages/home/home'
import Login_page from './pages/login/login'
import Dashboard from './pages/admin/dashboard/dashboard'
import Dashboardstaff from './pages/staff/dashboard/dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Addcourse from './pages/staff/addCourse/addCourse'
import Addvideos from './pages/staff/addVideos/addVideos'
import Course from './pages/staff/courses/courses'
import Tutorial_p from './pages/staff/tutorials_page/tutorial_p'
import Approve_page from './pages/admin/approves_page/approve_page'

import Signup_page from './pages/signup/signup'

import { AuthProvider } from "./services/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import HeaderPopup from './components/header/header'
import HeaderPrimary from './components/header/headerprimary'
import AdImage from './components/adImage/adImage'
import VideoPlayer from './components/user/videoplayer/videoPlayer'
import CoursedList from './components/user/coursedetail_list/coursedList'




function App() {
  return (
    // <Home/>
    <GoogleOAuthProvider clientId="121176681845-0a44sp8pe1r383bm29un16tq1lah24hl.apps.googleusercontent.com">
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login_page/>}/>
        <Route path='signup' element={<Signup_page/>}/>
        <Route path='admin' element={<Dashboard/>}/>
        <Route path='staff' element={<Dashboardstaff/>}/>
        <Route path='staff/addcourse' element={<Addcourse/>}/>
        <Route path='staff/addvideos' element={<Addvideos/>}/>
        <Route path='staff/courses' element={<Course/>}/>
        <Route path='staff/videos' element={<Tutorial_p/>}/>
        <Route path='admin/approve' element={<Approve_page/>}/>
        <Route path='test' element={<CoursedList/>}/>
      </Routes>
      </AuthProvider> 
    </BrowserRouter>

    </GoogleOAuthProvider>
    
    
  );
}

export default App;
