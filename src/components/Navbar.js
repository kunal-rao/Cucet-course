import React from 'react'

export default function Navbar() {
  return (
    <>
       <nav id="navbar">
       <div id="logo-class"> <div id="logo">
            <img src="img/logo.png" alt=""/>
        </div></div>
        <ul>
            <li><a href="/#">Syllabus</a></li>
            <li><a href="/#">Courses</a></li>
            <li><a href="/#">Study Material</a></li>
            <li><a href="/#">Mock Test</a></li>
            <li><a href="/#">Books</a></li>

            <li><button className="btn" >Join Now</button></li>
        </ul>
    </nav>
    </>
  )
}
