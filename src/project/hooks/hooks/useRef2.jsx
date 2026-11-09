import { useRef, useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const clicks = useRef(0);

  const handleClick = () => {
    clicks.current += 1;          // changes, but NO re-render
    console.log("Ref:", clicks.current);
    setCount(count + 1);          // changes AND re-renders
  };

  return (
    <div>
      <p>State: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
export default ClickCounter