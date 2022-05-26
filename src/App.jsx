import { Component } from 'react';
import Person from './Person/Person'
import './App.css'

// mutate -> change

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'Tony Stark', age: 300 },
      { id: 1, name: 'Wayne Bruce', age: 400 },
      { id: 2, name: 'Steve Rogers', age: 500 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex]); //!Alternative approach to copy object

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });

    
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.splice(personIndex, 1); //!WRONG
    // this.setState({ persons: persons }); // !WRONG
    
    // we assign reference the of the memory address into persons, so if we touch person it will change all position
    /**
     * ! work but not right way
      const persons = this.state.persons; 
      persons.splice(personIndex, 1);
      this.setState({ persons: persons });
     * /
    
    /**
     * Above approach that is not right way to update state or delete anything
     * We know that javascript object and array are reference type
     * so when we get persons from state as I done here i get actually get a pointer to the original persons's object managed by react to original state i should say
     * if I splice it here, I already mutate(change)  this original data . although it does work without any throwing an error
     * but it is not good practice, it show unpredictable app data and it is bad practice
     * !A good practice is to create a copy of persons array before manipulating it
     * ! Simple way of doing this person.slice() = slice method without argument simply copy the full array and returns a new one which is then store into variable
     * ! Now we can safely edit this new one and then update react state with your new array
     ** alternative -> person = [...persons]; using spread operator
     * ! Now we have array, a new array with the objects from the old array but the old array itself
     * !Note: We should always update state in an immutable fashion, without mutating the original state first
     * ! Note: Crate a copy, change that or manipulate that then update the state with setState()
     */
    // !Right Way
    const persons = [...this.state.persons]; 
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

    // this.state.persons.splice(personIndex, 1); // !Ok
    // this.setState({ persons: this.state.persons }); // !Ok
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log('boolean>>', doesShow);
    this.setState({ showPersons: !doesShow });
  }





  render() {
    console.log('state>>', this.state);
    console.log('ShowPerson>>', this.state.persons);

    
    console.log('persons>>', this.state.persons);

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    // Cleaner solution to set condition. 
    // remember that render method is rerender every state change
    // if Any state is changed then render method is rerender
    // persons will not show till then showPersons is become true.
    // any state can be change but until then showPerson is true UI do not render persons
    // whenever toggleShowPersons is trigger then showPersons become true and UI render persons
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working...</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >Switch Name</button>
        { persons }
      </div>
    )
  }
}

export default App
