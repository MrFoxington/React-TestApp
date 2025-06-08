import React from "react";
import TaskDialogue from "./TaskDialogue";
import ErrorBoundary from "../ErrorBoundry";
import {Stack, Typography} from "@mui/material";


export default function TaskTracker({ props }) {
  const [tasks, setTasks] = React.useState([]);

  function handleSubmit(formData) {
    console.log(formData);
    setTasks([...tasks, formData]);
  }

  return (
    <>
      <h2>Task Tracker</h2>
      {/* Add your task tracking components here */}

      <br />
      <h2>Priority Tasks</h2>
      <h3>List Tasks here</h3>
      <ErrorBoundary>
        <TasksList tasks={tasks} />
      </ErrorBoundary>
      <br />

      <h2>Non Priority Tasks</h2>
      <h3>List Tasks here</h3>
      <br />

      <h2>Add Tasks</h2>
      <h3> Add new Tasks Button</h3>
      <h3> Dialogue/popup form for data entry</h3>
      <TaskDialogue onSubmit={handleSubmit} />
    </>
  );
}

function TasksList({ tasks }) {
  const TaskItem = ({ task }) => {
    return (
      <>
        <div className="task-item">
          <Stack direction="row" spacing={10} alignItems="center">
            <Typography>Title: {task.title}</Typography>
            <Typography>Desctiption: {task.description}</Typography>
            <Typography>Status: {task.status}</Typography>
            <Typography>Priority: {task.priority}</Typography>
            <Typography>Due Date: {task.dueDate}</Typography>
          </Stack>
        </div>
      </>
    );
  };

  return (
    <>
      <Stack>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </Stack>
    </>
  );
}

//Task Controll forms
// Edit Task Button
// Delete Task Button

//Task Displays
// Filter by Priority
// Filter by Status
// Sort Tasks by Due Date
// Sort Tasks by Priority
