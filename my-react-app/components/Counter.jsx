import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: "2px solid green",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      marginBottom: "20px"
    }}>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>➖ Decrease</button>
    </div>
  );
}
