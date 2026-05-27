import { useState, useEffect } from 'react';

function Task50() {

  const [count, setCount] = useState(0);

  useEffect(() => {

    console.log("Component Loaded");

  }, []);

  return (
    <div>

      <h1>useState and useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}

export default Task50;