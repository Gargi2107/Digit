import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Services from './components/Services';
// import Partners from './components/Partners';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Stocks from './components/Stocks';
import Bonds from './components/Bonds';
import MutualFunds from './components/MutualFunds';

// import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home name={userName} />} />

          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/stocks" exact element={<Stocks />} />
          <Route path="/bonds" exact element={<Bonds />} />
          <Route path="/mutualfunds" exact element={<MutualFunds />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
