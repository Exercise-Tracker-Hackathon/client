import React, { useState } from "react";

const Dashboard = () => {
  const [formState, setFormState] = useState({
    exercises: [{ pushUps: false }, { pullUps: false }]
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <p>Choose An Exercise</p>
        <label htmlFor="pushUps">Push Ups</label>
        <input
          onChange={handleChange}
          id="pushUps"
          type="checkbox"
          value="pushUps"
          name="pushUps"
        />
        <label htmlFor="sitUps">Sit Ups</label>
        <input
          onChange={handleChange}
          id="sitUps"
          type="checkbox"
          value="sitUps"
          name="sitUps"
        />
        <label htmlFor="pullUps">Pull Ups</label>
        <input
          onChange={handleChange}
          id="pullUps"
          type="checkbox"
          value="pullUps"
          name="pullUps"
        />

        <input
          onChange={handleChange}
          id="custom"
          type="text"
          value=""
          name="custom"
          placeholder="Custom Exercise"
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Dashboard;
