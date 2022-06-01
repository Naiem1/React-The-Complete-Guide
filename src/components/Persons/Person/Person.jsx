// import Radium from 'radium';
import classes from './Person.module.css';
import { Component } from 'react';

class Person extends Component {
  // console.log(props)

  constructor(props) {
    super(props);
    console.log('[Person.js] constructor');
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Person.js] getStateDerivedFromProps', props, state);
  //   return state;
  // }

  shouldComponentUpdate(props, state) {
    console.log('[Person.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[Person.js] componentDidUpdate' )
  }

  render() {
    console.log('child-2 [Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p  onClick={this.props.clicked}>I'm a {this.props.name} and I'm {this.props.age} years old! </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    )
  }
  

}
export default Person;