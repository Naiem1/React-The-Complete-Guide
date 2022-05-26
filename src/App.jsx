import { Component } from 'react';
import Person from './Person/Person'
import './App.css'

// mutate -> change

class App extends Component {
  state = {
    persons: [
      { name: 'Tony Stark', age: 300 },
      { name: 'Wayne Bruce', age: 400 },
      { name: 'Steve Rogers', age: 500 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    console.log('was Clicked!');
    // DONT'T DO THIS: this.state.persons[0].name = 'Pitter Parker!';
    this.setState({
      persons: [
        { name: newName, age: 300 },
        { name: 'Wayne Bruce', age: 400 },
        { name: 'Steve Rogers', age: 80 },
      ]
    })
    console.log(newName);
    console.log('this>>', this);
  }

  nameChangedHandler = (event) => {
    console.log('changed', event.target.name)
    this.setState({
      persons: [
        { name: 'Pitter parker', age: 300 },
        { name: event.target.value, age: 400 },
        { name: 'Steve Rogers', age: 80 },
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    console.log('boolean>>', doesShow);
    this.setState({ showPersons: !doesShow });
  }



  render() {
    console.log('state>>', this.state);
    console.log('ShowPerson>>', this.state.showPersons);

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working...</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}
        >Switch Name</button>

        {
          this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Harry Potter')}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div> : null }
      </div>
    )
  }
}

export default App
