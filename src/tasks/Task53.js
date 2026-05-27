import { useSelector, useDispatch } from 'react-redux';

function Task53() {

  const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  return (
    <div>

      <h1>Redux Example</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "INCREMENT" })
        }
      >
        Increase
      </button>

    </div>
  );
}

export default Task53;