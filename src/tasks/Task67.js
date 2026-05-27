import AdvancedErrorBoundary
from '../components/AdvancedErrorBoundary';

import BrokenComponent
from '../components/BrokenComponent';

function Task67() {

  return (

    <div>

      <AdvancedErrorBoundary>

        <BrokenComponent />

      </AdvancedErrorBoundary>

    </div>
  );
}

export default Task67;