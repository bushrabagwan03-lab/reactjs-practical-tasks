import ErrorBoundary from '../components/ErrorBoundary';

import BuggyComponent from '../components/BuggyComponent';

function Task56() {

  return (

    <div>

      <h1>Error Boundary Example</h1>

      <ErrorBoundary>

        <BuggyComponent />

      </ErrorBoundary>

    </div>

  );
}

export default Task56;