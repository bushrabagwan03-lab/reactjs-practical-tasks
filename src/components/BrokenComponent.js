function BrokenComponent() {

  throw new Error(
    "Application Crashed"
  );

  return (
    <h1>Broken Component</h1>
  );
}

export default BrokenComponent;