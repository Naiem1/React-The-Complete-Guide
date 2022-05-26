import { useState } from "react";
import Person from "./Person/Person";
import './App.css';


const App = () => {
  const [person, setPerson] = useState({
    persons: [
    { name: 'Tony Stark', age: 100 },
    { name: 'Pitter Parker', age: 200 },
    { name: 'Wayne Bruce', age: 300 },
  ],
  });

  const [otherState, setOtherState] = useState('Some other value');
  const [name, setName] = useState('Wayne Bruce!');
  
  console.log(otherState);
  console.log(name);
  console.log('Hello world!');

  // !Functional component: if state is changed then all component is rerender, here one of those state is change then App component will re-render 
  const switchNameHandler = () => {
  //   setPerson({
  //     persons: [
  //     { name: 'Pitter Parker', age: 100 },
  //     { name: 'Pitter Parker', age: 200 },
  //     { name: 'Wayne Bruce', age: 3 },
  //     ],
  // })
    
    console.log('Hello Switch Handler!');
    // setName('Pitter  Parker');
  }

  console.log('state>>', person);
  return (
    <div className="App">
      <h1>I'm React App</h1>
      <p>It's Running good...</p>
      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={person.persons[0].name } age={person.persons[0].age }/>
      <Person name={person.persons[1].name} age={person.persons[1].age}>My Hobbies: Racing...</Person>
      <Person name={person.persons[2].name} age={person.persons[2].age}/>
    </div>
  )
}


export default App;