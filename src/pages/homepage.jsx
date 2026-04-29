import React from "react";
// import Navbar from "../components/navbar/navbar";
import UserCard from "../components/userCard/userCard";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Navbar /> */}
      <UserCard user="matteolvt" />
    </div>
  );
};

export default Homepage;
