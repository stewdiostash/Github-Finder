import React from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//     </div>
//   );
// }

export default App;
