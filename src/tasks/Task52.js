import { useContext } from 'react';

import UserContext from '../context/UserContext';

function ChildComponent() {

  const user = useContext(UserContext);

  return (
    <div>

      <h2>User: {user}</h2>

    </div>
  );
}

function Task52() {

  return (

    <UserContext.Provider value="Rahul">

      <div>

        <h1>Context API Example</h1>

        <ChildComponent />

      </div>

    </UserContext.Provider>

  );
}

export default Task52;