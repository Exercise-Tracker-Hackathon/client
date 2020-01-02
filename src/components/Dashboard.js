import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label htmlFor="exercise-name">Exercise Name</label>
        <select name="exercise-name" id="exercise-name">
          <option value="">Select an Exercise</option>
          <option value="push-ups">Push Ups</option>
          <option value="sit-ups">Sit Ups</option>
          <option value="pull-ups">Pull Ups</option>
        </select>
      </form>
    </div>
  );
};

export default Dashboard;
