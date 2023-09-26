import "./App.css";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Home from "./pages/Home";
function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {isUserSignedIn && <Route path="/account" element={<Account />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
