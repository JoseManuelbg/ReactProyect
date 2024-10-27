import React from "react";
import "./Profile.css";
function Profile(props) {
  const skills = props.skill || [];
  return (
    <>
      <div className="profile-wrapper">
        <div className="pic">
          {props.img ? (
            <img src={props.img} alt={`${props.name}'s profile`} />
          ) : (
            <img src="../public/no-profile.webp" alt="no profile" />
          )}
        </div>
        <div className="content">
          <h1 className="name">
            {props.name}{" "}
            <div className="premium">
              {props.premium ? <p>Premium</p> : <p></p>}
            </div>
          </h1>
          <p className="email">{props.email}</p>
          <p className="main-text">{props.descrip ? props.descrip : "No description"}</p>
          <div className="skills">
            <ul className="skills">
              {skills.length > 0 ? 

              (skills.map(( skill, index) => <li key="{index}">{skill}</li>))
              : ""

              }
            </ul> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
