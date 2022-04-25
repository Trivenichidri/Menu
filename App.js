import "./App.css";
import Lunch from "./pages/Lunch";
import Breakfast from "./pages/Breakfast";
import Shakes from "./pages/Shakes";
import All from "./pages/All";
//import Data from "./pages/Data";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Our Menu</h1>
        <div className="underLine"></div>
        <hr />
      </header>
      <nav className="navbar">
        <Link to="/All" className="first" id="highfirst">
          All
        </Link>
        <Link to="/Breakfast" className="second" id="highsecond">
          Breakfast
        </Link>
        <Link to="/Lunch" className="third" id="highthird">
          Lunch
        </Link>
        <Link to="/Shakes" className="fourth" id="highfourth">
          Shakes
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path="/all" element={<All />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path="/lunch" element={<Lunch />}></Route>
          <Route path="/shakes" element={<Shakes />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
