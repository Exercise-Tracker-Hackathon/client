import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Link to="/add-workout">Add Exercise Routine</Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select An Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
