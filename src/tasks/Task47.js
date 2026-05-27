import { useState } from 'react';

function Task47() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      <h1>Conditional Rendering Example</h1>

      {
        isLoggedIn
        ?
        <h2>Welcome User</h2>
        :
        <h2>Please Login</h2>
      }

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        Toggle Login
      </button>

    </div>
  );
}

export default Task47;