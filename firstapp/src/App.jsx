import { useState } from 'react'
import './App.css'

function App () {
  const [count, setcount] = useState(0);

  const increase  = () =>{
    setcount(count+1);
  };

  const decrease  = () =>{
    setcount(count-1);
  };

  const setZero  = () =>{
    setcount(0);
  };
  
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>Set Zero</button>

      {count}
    </div>
  );

};

    
export default App;
