import React, { createContext, useContext, useState, memo } from "react";

const ThemeContext = createContext("light");

const Child = React.memo(function Child({ label }) {
  console.log("Child rendered");
  const theme = useContext(ThemeContext);
  return <p className={theme}>{label}</p>;
});

function Test() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={() => setTheme("dark")}>Go dark</button>
      <Child label="Hello" />
    </ThemeContext.Provider>
  );
}

export default Test;