import './Person.css';

const Person = (props) => {
  console.log(props)
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old! </p>
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