import React from 'react';
import Home from "../src/home/home";
import './App.scss';
import NavHeader from './header/header';
import Experientces2 from "../src/home/experience";
const App=()=> {
  return (
    <div className="App" key={1}>
    
        
        <NavHeader  />
        <Home />
        <Experientces2  />
    </div>
  );
}

export default App;
