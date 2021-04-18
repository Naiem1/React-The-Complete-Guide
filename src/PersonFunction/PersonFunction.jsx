import { useState } from 'react';
import PersonChild from './personChild';


const PersonFunction = () => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Harry potter', age:'25' },
      { name: 'Cavin pattinson', age:'28' },
      { name: 'Cristina Struat', age:'22' }
    ],
    otherState: 'Some other value'
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Batman', age: '100' },
        { name: 'Spider Man', age:'200' },
        { name: 'SuperMan', age:'300' }
      ]
    });
  };

  return (
    <div className="personFunction">
      <h1>Functional Component for person</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <PersonChild
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <PersonChild
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >My Hobbes: Watching Move</PersonChild>
      <PersonChild
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  )
}

export default PersonFunction;