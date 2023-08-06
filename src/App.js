import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App;
