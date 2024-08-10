import Intro from "./Intro"
import Profile from "./Profile";
import Skills from "./Skills"
import SoftSkills from "./SoftSkills";
import React from "react";

function ProfileLayout() {
  return (
    <div id="profile-layout">
		<Intro/>
		<Profile/>
		<Skills/>
		<SoftSkills/>
    </div>
  );
}

export default ProfileLayout;
