import React from "react";
import DragAndDropList from "./DragAndDrop/DragAndDrop"; // Ensure the path is correct

function App() {
  return (
    <div className="App">
      <h1 className="text-center fs-2 p-2 my-2 bg-secondary text-white">My Drag and Drop Project</h1>
      <DragAndDropList />
    </div>
  );
}

export default App;