import React from "react";

interface ButtonProps {
  color: string;
  children: string;
}

function Button(props: ButtonProps) {
  const { color, children } = props;

  const [counter, setCounter] = React.useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      onClick={increment}
    >
      {children} {counter}
    </button>
  );
}

export default Button;
