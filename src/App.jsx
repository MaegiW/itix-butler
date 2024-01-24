import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Checkin from "./Checkin";
import Scan from "./Scan";
import Writeoff from "./Writeoff";
import Report from "./Report";
import NavButton from "./components/NavButton";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Checkin />}></Route>
          <Route path="/scan" element={<Scan />}></Route>
          <Route path="/writeoff" element={<Writeoff />}></Route>
          <Route path="/report" element={<Report />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
