import Objective from "./Objective"
import Education from "./Education";
import Projects from "./Projects"
import React from "react";

function DetailsLayout() {
  return (
    <div id="details-layout">
		<Objective/>
		<Education/>
		<Projects/>
    </div>
  );
}

export default DetailsLayout;
