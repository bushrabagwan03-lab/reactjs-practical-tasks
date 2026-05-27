import { useState } from 'react';

function Task45() {

  const [name, setName] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Form Submitted: " + name);
  };

  return (
    <div>

      <h1>Form Handling Example</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Task45;