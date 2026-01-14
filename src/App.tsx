import React, { useCallback, useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const triple = useCallback(() => count * 3, [count]);

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center bg-slate-100 h-screen">
        <h1>hello</h1>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
        <p>Count: {count}</p>
        <p>Triple: {triple()}</p>
      </div>
    </React.Fragment>
  );
}

export default App;
