import React from "react";
import Header from "../components/header/header";
import ToDoList from "../components/toDoList/toDoList";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <ToDoList />
    </div>
  );
};

export default Homepage;
