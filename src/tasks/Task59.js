import React, {
  lazy,
  Suspense
} from 'react';

const LazyComponent = lazy(() =>
  import('../components/LazyComponent')
);

function Task59() {

  return (

    <div>

      <h1>Lazy Loading Example</h1>

      <Suspense fallback={<h2>Loading...</h2>}>

        <LazyComponent />

      </Suspense>

    </div>

  );
}

export default Task59;