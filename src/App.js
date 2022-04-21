import { Routes, Route } from "react-router-dom";
import "./App.css";
import Crew from "./pages/crew/crew";
import Destination from "./pages/destination/destination";
import Home from "./pages/home/home";
import Technology from "./pages/technology/technology";
// import { MobileNav } from "./components/header/header";

function App() {
  return (
    // <div className="App">
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

      {/* <Home /> */}
      {/* <Destination /> */}
      {/* <Crew /> */}
      {/* <MobileNav /> */}
      {/* <Technology /> */}
    </>
    // </div>
  );
}

export default App;
