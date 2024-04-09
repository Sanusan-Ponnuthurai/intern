import { useState } from 'react'
import './App.css'

function App() {
  const users = [{name:"Pedro",age:21},{name:"Jake",age:25},{name:"Jessica",age:31}]
  return (
    <div>
      {users.map((user,key) => {
        return <User name ={user.name} age={user.age} />
      })}
    </div>
  );

};


const User = (props) => {
  return (
    <div>
      {props.name} {props.age}
    </div>
  )
}  
    
export default App;
