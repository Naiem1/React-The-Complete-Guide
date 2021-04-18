import { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import PersonFunction from './PersonFunction/PersonFunction';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 29 },
      { name: 'Menu', age: 28 },
      { name: 'Stephanie', age: 25 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    console.log('Was clicked...');
    this.setState({
      persons: [
        { name: newName, age: '100' },
        { name: 'Captain America', age: '200' },
        { name: 'Hulk', age: 200}
      ]
    })
  };

  nameChangedHandler = e => {
    console.log(e.target.value);
    this.setState({
      persons: [
        { name: 'Captain America', age: '100' },
        { name: e.target.value, age: '200' },
        { name: 'Hulk', age: 200 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: '#FFF',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px'
    }

    return (
      <div className="App">
        <h1>Hi, I am React App</h1>
        <p>This is really working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximum!')}>Switch Name</button> */}
        <button
          onClick={() => this.switchNameHandler('Asus')}
          style={style}
        >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dell')}
          changed={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />

        <br/>
        <hr/>
        <br/>
        <PersonFunction/>
      </div>
    );
  };
};

export default App;

