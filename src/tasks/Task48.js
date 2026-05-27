function Task48() {

  const students = [
    "Rahul",
    "Aman",
    "Priya",
    "Sneha"
  ];

  return (
    <div>

      <h1>List Rendering Example</h1>

      {
        students.map((student, index) => (
          <h2 key={index}>
            {student}
          </h2>
        ))
      }

    </div>
  );
}

export default Task48;