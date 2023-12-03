import React from "react";
import Counter from "./Tasks/Task1/task1.jsx";
import Post from "./Tasks/Task2/task2.jsx";
import PostFour from "./Tasks/Task4/task4.jsx";
function App() {
  return (
    <div className="App">
      { "№1" }
      {<Counter />}
      { "№2" }
      { <Post />  }
      { "№4" }
      {<PostFour />}
    </div>
  );
}
export default App;