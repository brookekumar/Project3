import React from 'react';
import './App.css';
import Card from "./components/Card";
import HeaderMain from"./components/HeaderMain";

function App() {
  return (
   
   <div>
       
       <HeaderMain/>
    
        <div style={{display:"flex"}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
        <br/>

        <div style={{display:"flex"}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>

    </div>
  )
}

export default App;
