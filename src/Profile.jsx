import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <>
      <div className="profile-container">
        <p className="title"> PRO </p>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/Kylie-Jenner_GettyImages-602272520.jpg?resize=1200:*"
            alt="disha"
            className="profile-img"
          />
          <h2 className="user-name my"> Kylie Jenner </h2>
          <p className="my"> UI/UX Designer </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet modi
            architecto Reprehenderit voluptate explicabo voluptatum consectetur,
            asper.
          </p>
          <div className="flex" style={{ margin: "2.5rem 0" }}>
            <div>
              <p className="fls"> Projects </p>
              <p className="count"> 18 </p>
            </div>
            <div>
              <p className="fls"> Following </p>
              <p className="count"> 18 </p>
            </div>
            <div>
              <p className="fls"> Followers </p>
              <p className="count"> 18 </p>
            </div>
          </div>
          <div className="flex">
            <button style={{ flex: "1" }}> Follow </button>
            <button style={{ flex: "1" }}> Hire Me </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
