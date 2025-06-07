import React from "react";
import TaskDialogue from "./TaskDialogue";

export default function TaskTracker({ props }) {
  return (
    <>
      <h2>Task Tracker</h2>
      {/* Add your task tracking components here */}

      <br />
      <h2>Priority Tasks</h2>
      <h3>List Tasks here</h3>
      <br />

      <h2>Non Priority Tasks</h2>
      <h3>List Tasks here</h3>
      <br />

      <h2>Add Tasks</h2>
      <h3> Add new Tasks Button</h3>
      <h3> Dialogue/popup form for data entry</h3>
      <TaskDialogue/>
    </>
  );
}

//Task Form
// Title
// Description
// Due Date
// Priority (High, Medium, Low)
// Status (Pending, In Progress, Completed)
// Add Task Button

//Task Controll forms
// Edit Task Button
// Delete Task Button

//Task Displays
// Filter by Priority
// Filter by Status
// Sort Tasks by Due Date
// Sort Tasks by Priority
