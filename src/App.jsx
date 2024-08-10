import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileLayout from "./ProfileLayout";
import DetailsLayout from "./DetailsLayout";

function App() {
  return (
    <div id="page-layout" className="text-font">
      <ProfileLayout/>
      <DetailsLayout/>
    </div>
  );
}

export default App;
