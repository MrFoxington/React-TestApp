import React from "react";
import { TextField, MenuItem, Stack } from "@mui/material";

import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const priorities = [
  {
    value: "High",
    label: "High",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Low",
    label: "Low",
  },
  {
    value: "Junk",
    label: "Junk",
  },
];

const statuses = [
  {
    value: "Pending",
    label: "Pending",
  },
  {
    value: "In-Progress",
    label: "In-Progress",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Cancelled",
    label: "Cancelled",
  },
];

//Task Form
// Title
// Description
// Due Date
// Priority (High, Medium, Low)
// Status (Pending, In Progress, Completed)
// Add Task Button
export default function TaskForm({ addTask }) {
  return (
    <>
      <Stack spacing={2}>
        <TaskTitle />
        <TaskDescription />
        <TaskPriority />
        <TaskDueDate />
        <TaskStatus />
      </Stack>
    </>
  );
}

function TaskTitle() {
  return (
    <TextField
      autoFocus
      required
      margin="dense"
      id="title"
      name="title"
      label="Task Title"
      type="text"
      fullWidth
      variant="standard"
    />
  );
}

function TaskDescription() {
  return (
    <TextField
      required
      margin="dense"
      id="description"
      name="description"
      label="Task Description"
      type="text"
      fullWidth
      variant="standard"
    />
  );
}

function TaskPriority() {
  return (
    <TextField
      required
      select
      margin="dense"
      id="priority"
      name="priority"
      label="Task Priority"
      //   type="text"
      variant="standard"
      sx={{ width: "150px" }}
    >
      {priorities.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

function TaskStatus() {
  return (
    <TextField
      required
      select
      margin="dense"
      id="status"
      name="status"
      label="Task Status"
      variant="standard"
      sx={{ width: "150px" }}
    >
      {statuses.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

function TaskDueDate() {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DatePicker id="dueDate" name="dueDate" label="Due Date" />
    </LocalizationProvider>
  );
}
