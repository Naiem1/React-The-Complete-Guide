import './person.css';

const Person = (props) => {

  console.log(props)

  return (
    <div class="person">
      <h4 onClick={props.click}>Hi, I am a "{props.name}" and I am {props.age} years old!</h4>
      <p>{props.children}</p>
      <input
        type="text"
        name=""
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};


export default Person;