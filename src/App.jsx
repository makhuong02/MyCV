import React from "react";
import ProfileLayout from "./components/ProfileLayout";
import DetailsLayout from "./components/DetailsLayout";

function App() {
  return (
    <div id="page-layout" className="text-font">
      <ProfileLayout/>
      <DetailsLayout/>
    </div>
  );
}

export default App;
