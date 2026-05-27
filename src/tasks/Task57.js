import { useState } from 'react';

function Task57() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {

    event.preventDefault();

    let validationErrors = {};

    if(name === '') {
      validationErrors.name = "Name is required";
    }

    if(email === '') {
      validationErrors.email = "Email is required";
    }

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0) {

      alert("Form Submitted Successfully");

    }
  };

  return (
    <div>

      <h1>Form Validation Example</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        {
          errors.name &&
          <p>{errors.name}</p>
        }

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        {
          errors.email &&
          <p>{errors.email}</p>
        }

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default Task57;