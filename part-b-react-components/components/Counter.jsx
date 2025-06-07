import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{

      padding: "20px",  
      textAlign: "center",
      marginBottom: "20px",
      border: "2px solid #EFEEEA",
      borderRadius: "10px"
    
    }}>

      <h2>Counter</h2>

      <p style={{marginBottom: "30px", marginTop: "10px"}}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "10px" }}>➕ Increase Count</button> {/* Adds 1 to count */}
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>➖ Decrease Count</button> {/* Subtracts 1 to count */}

    </div>
  );
}
