import { useEffect, useState } from 'react';

function Task58() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then((response) => response.json())

      .then((data) => {

        setUsers(data);

      });

  }, []);

  return (
    <div>

      <h1>Fetch API Example</h1>

      {
        users.map((user) => (

          <h3 key={user.id}>
            {user.name}
          </h3>

        ))
      }

    </div>
  );
}

export default Task58;