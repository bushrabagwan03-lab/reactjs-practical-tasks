import { useEffect, useState } from 'react';

import axios from 'axios';

function Task58() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios
      .get('https://jsonplaceholder.typicode.com/users')

      .then((response) => {

        setUsers(response.data);

      });

  }, []);

  return (
    <div>

      <h1>Axios API Example</h1>

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