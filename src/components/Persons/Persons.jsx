import Person from "./Person/Person";

const Persons = (props) => props.persons.map((person, index) => {
  return <Person
    name={person.name}
    age={person.age}
    clicked={() => props.clicked(index)}
    key={person.id}
    changed={(event) => props.changed(event, person.id)}
  />
})


export default Persons;