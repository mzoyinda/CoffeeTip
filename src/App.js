import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import './App.css'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Home />} index />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<SignUp/>} />
        </Routes>
    </Router>
  );
}

export default App;
