import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <ConRender />
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
    </div>
  );
};

const ConRender = () => {
  const age = 15;
  const isGreen =true;
  const isWhite =false;
  return (
    <div>
      {age >=18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      {isGreen && <button>Button</button>}
      <h1 style = {{color:isWhite ? "yellow" : "red"}}>This text is yellow</h1>
    </div>
  );
};

export default App;
