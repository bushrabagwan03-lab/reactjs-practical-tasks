function BuggyComponent() {

  throw new Error("App Crashed");

  return (
    <div>
      <h1>Buggy Component</h1>
    </div>
  );
}

export default BuggyComponent;