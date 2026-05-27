import { observer } from 'mobx-react-lite';

import counterStore from '../mobx/counterStore';

const Task66 = observer(() => {

  return (

    <div
      style={{
        textAlign: 'center',
        marginTop: '100px'
      }}
    >

      <h1>MobX Example</h1>

      <h2>
        Count: {counterStore.count}
      </h2>

      <button
        onClick={() =>
          counterStore.increment()
        }
      >
        Increase
      </button>

    </div>
  );
});

export default Task66;