import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>You don’t have any workouts yet. Create a workout to get started.</p>
      <Link to="/add-workout">Add Exercise Routine</Link>
    </div>
  );
};

export default Dashboard;
