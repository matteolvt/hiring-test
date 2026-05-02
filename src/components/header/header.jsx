import React from "react";
import "./header.css";
import UserCard from "../userCard/userCard";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">To-Do List</h1>
      <UserCard user="matteolvt" />
    </header>
  );
};

export default Header;
