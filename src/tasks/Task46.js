function Task46() {

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>

      <h1>Event Handling Example</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

    </div>
  );
}

export default Task46;