// import Radium from 'radium';
import classes from './Person.module.css';

const Person = (props) => {
  console.log(props)
  
  return (
    <div className={classes.Person}>
      <p  onClick={props.clicked}>I'm a {props.name} and I'm {props.age} years old! </p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  )
}
export default Person;