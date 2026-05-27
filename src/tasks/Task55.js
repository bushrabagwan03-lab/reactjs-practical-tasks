import {
  useSelector,
  useDispatch
} from 'react-redux';

import { incrementAsync } from '../redux/actions';

function Task55() {

  const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  return (
    <div>

      <h1>Redux Thunk Example</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() =>
          dispatch(incrementAsync())
        }
      >
        Increase After 2 Seconds
      </button>

    </div>
  );
}

export default Task55;