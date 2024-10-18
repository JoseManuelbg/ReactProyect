import React from 'react'
import './Profile.css'
function Profile(props) {
  return (
    <>
        <div className="profile-wrapper">
            <div className="pic"><img src="../public/no-profile.webp" alt="no profile" /></div>
            <div className="content">
                <h1 className="name">{props.name}</h1>
                <p className="email">josemanuebabaciugheorghiu@gmail.com</p>
                <p className="main-text">{props.descrip}</p>
                <ul className="skills">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Profile
