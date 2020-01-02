import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddWorkout = () => {
  const [exercises, setExercises] = React.useState([
    { label: "Jumping Jacks", type: "checkbox" },
    { label: "Push Ups", type: "checkbox" },
    { label: "Pull Ups", type: "checkbox" }
  ]);

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <Form>
        <Form.Group controlId="form">
          <Form.Label>Name your Workout</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        {exercises.map((exercise, index) => (
          <div key={`inline-${exercise.label}`} className="mb-3">
            <Form.Check
              inline
              label={exercise.label}
              type={exercise.type}
              id={`inline-${exercise.type}-${index}`}
            />
          </div>
        ))}
        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default AddWorkout;
