import './App.css';
import GetProducts from "./getProducts";
import Navbar from "./Navbar";
import axios from "axios";
import React,{useEffect,useState} from "react";
function App() {
  return (
      <>
          <Navbar/>
          <GetProducts/>
      </>
  );
}

export default App;
