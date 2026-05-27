import useCounter from '../hooks/useCounter';

function Task51() {

  const { count, increase } = useCounter();

  return (
    <div>

      <h1>Custom Hook Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>

    </div>
  );
}

export default Task51;