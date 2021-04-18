

const PersonChild = (props) => {
  return (
    <div>
      <h4>My name is {props.name} and I am {props.age} years old!</h4>
      <p>{ props.children }</p>
    </div>
  )
}

export default PersonChild;