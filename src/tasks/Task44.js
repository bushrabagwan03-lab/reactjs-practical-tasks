function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Course: {props.course}</h3>
    </div>
  );
}

function Task44() {
  return (
    <div>
      <h1>Props Example</h1>

      <Student name="Rahul" course="React JS" />

      <Student name="Aman" course="Node JS" />
    </div>
  );
}

export default Task44;