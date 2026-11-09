import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {} // simulate heavy work
  console.log("end")
  return num * 2;
}

function Calculating() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const result = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setNumber(number + 1)}>Change number</button>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default Calculating