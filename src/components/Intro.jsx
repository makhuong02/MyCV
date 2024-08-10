import React from "react";
import Khuong_avt from "../assets/Khuong_avt"

function Intro() {
    return (
        <div id="appearance">
            <img id="avatar" src={Khuong_avt} alt="" />
            <h1 className="text-color">Luan Ma Khuong</h1>
            <p id="role">Intern Software Developer</p>
        </div>
    );
}

export default Intro;
