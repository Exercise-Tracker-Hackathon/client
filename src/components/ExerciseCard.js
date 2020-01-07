import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import repsButton from "../assets/button.svg";
import { FaEllipsisV } from "react-icons/fa";

const ExerciseCard = ({ exercise, addSet }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    axiosWithAuth()
      .post(`/sets`, { exercise_id: `${exercise.id}` })
      .then(res => {
        addSet();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Card
      style={{
        maxWidth: "250px",
        width: "21em",
        height: "86px",
        background: "#ECECEC",
        border: "none",
        borderRadius: "5px",
        margin: "10px 20px",
        color: "#676767"
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaEllipsisV
            color="#C4C4C4"
            size="24px"
            style={{
              alignSelf: "center",
              marginRight: "10px",
              cursor: "pointer"
            }}
            onClick={handleShow}
          />
          <Card.Text style={{ fontSize: "15px" }}>
            {exercise.reps} {exercise.type.toLowerCase()}
            <br />
            {exercise.sets} sets
          </Card.Text>
        </div>
        <img
          src={repsButton}
          alt="add a set"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </Card.Body>
      <Modal show={show} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ textAlign: "center", padding: "40px 0" }}>
          Are you sure you <br /> want to delete this exercise?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="light"
            style={{ border: "1px solid #EC6033", color: "#EC6033" }}
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="light"
            onClick={handleClose}
            style={{ background: "#EC6033", color: "#fff" }}
          >
            Yes, delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ExerciseCard;
