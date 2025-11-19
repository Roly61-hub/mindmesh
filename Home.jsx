import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ padding: 30, fontFamily: "Arial" }}>
    <h1>MindMesh</h1>
    <p>Welcome to the team compatibility tool powered by MBTI and more.</p>
    <Link to="/team"><button>Go to Team Analysis</button></Link>
  </div>
);

export default Home;