import React, {
  lazy,
  Suspense
} from 'react';

const Profile = lazy(() =>
  import('../components/Profile')
);

function Task65() {

  return (

    <div
      style={{
        textAlign: 'center',
        marginTop: '100px'
      }}
    >

      <h1>Code Splitting Example</h1>

      <Suspense
        fallback={<h2>Loading Component...</h2>}
      >

        <Profile />

      </Suspense>

    </div>
  );
}

export default Task65;