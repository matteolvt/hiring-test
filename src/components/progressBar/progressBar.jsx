import React from "react";
import "./progressBar.css";

const ProgressBar = ({ completedTasks, totalTasks }) => {
  const progressPercentage =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="progress-container">
      <p>
        Tasks Complete : {completedTasks} / {totalTasks}
      </p>

      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "8px",
          height: "20px",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "#4caf50",
            height: "100%",
            borderRadius: "8px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
