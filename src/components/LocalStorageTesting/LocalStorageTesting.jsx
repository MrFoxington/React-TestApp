import React from "react";
import { Box, Button } from "@mui/material";

export default function LocalStorageTesting() {
  const [backgroundColour, setBackgroundColour] = React.useState("red");

  function isStorageAvailable() {}

  function loadSettings() {
    const bgColour = localStorage.getItem("bgColour");
    if (bgColour) {
      setBackgroundColour(bgColour);
    }
    console.log("Loaded Settings");
  }

  function saveSettings() {
    const bgColour = backgroundColour;
    localStorage.setItem("bgColour", bgColour);
    console.log("Saved Settings");
  }

  return (
    <>
      <h2>LocalStorage Testing</h2>
      <Box sx={{ bgcolor: backgroundColour }}>
        <br />
        <br />
        <br />
        <br />
      </Box>
      <h3>Colour Picker</h3>
      <Button onClick={() => setBackgroundColour("red")}>Red</Button>
      <Button onClick={() => setBackgroundColour("blue")}>Blue</Button>
      <Button onClick={() => setBackgroundColour("green")}>Green</Button>
      <Button onClick={() => setBackgroundColour("orange")}>Orange</Button>
      <Button onClick={() => setBackgroundColour("pink")}>Pink</Button>
      <Button onClick={() => setBackgroundColour("purple")}>Purple</Button>
      <Button onClick={() => setBackgroundColour("")}>None</Button>

      <h3>Save Selection Button</h3>
      <Button onClick={saveSettings}>Save Settings</Button>
      <h3>Load Saved Selection Button</h3>
      <Button onClick={loadSettings}>Load Settings</Button>
    </>
  );
}
