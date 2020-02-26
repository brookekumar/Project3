import React from 'react';
import './App.css';
import Card from "./components/Card"

function App() {
  return (
    <div>
       <h1 class="center grey-text">Expanding Card</h1>
<p class="center blue-text">React Mobile UI Pratice， Click Picture to expand, then click content to expand more</p>
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
