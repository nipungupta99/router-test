import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StaticRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/myapps" element={<Navigate replace to={'/learn'}  />}/>
        <Route path="learn" element={<Learn/> }>
            <Route path="courses" element={<Courses/> } >
                <Route path=":courseId" element={<CourseID/>} />
            </Route>
            <Route path="bundles" element={<Bundles/> } />
        </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
    return(
        <div>
            <h1 className="text-white">Home Route</h1>
        </div>
    )
}
function Learn() {
    return(
        <div>
            <h1  className="text-white">LEARN Component</h1>
            <h4 className="text-white"> >this is the learning component with all the courses</h4>
            <Link to={'/learn/courses'} className=" btn btn-success text-white me-5" >Courses</Link>
            <Link to={'/learn/bundles'}  className=" btn btn-primary text-white ">Bundle</Link>
            <Outlet/>
        </div>
    )
}
function Courses() {
    const courseList = ["React", "Angular", "Vue", "NodeJS"]
    const randomCourseName = courseList[Math.floor(Math.random()*courseList.length)]
    return(
        <div>
            <h1 className="text-white"> course List</h1>
            <h4>Course Cards</h4>
            <p>More COurses</p>
            <NavLink to={`/learn/courses/${randomCourseName}`} >{randomCourseName} Course</NavLink>
            <Outlet/>
        </div>
    )
}
function Bundles() {
    return(
        <div>
            <h1 className="text-white"> Bundle List</h1>
            <h4>Bundle Cards</h4>
        </div>
    )
}

function CourseID() {
    const {courseId} = useParams();
    return(
        <div>
            <h1 className="text-white"> URL Param is : {courseId}</h1>
        </div>
    )
}


reportWebVitals();
