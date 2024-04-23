import "./App.css";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";

function App() {
  const [dataCity, setDataCity] = useState([]);

  function onSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="box">
      <Navbar onSearchChange={onSearchChange} />
    </div>
  );
}

export default App;
