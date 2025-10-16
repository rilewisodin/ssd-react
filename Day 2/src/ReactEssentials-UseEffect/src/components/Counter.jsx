import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Use useEffect to update the document title whenever the count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // Optional: Cleanup (not needed here, but an example for reference)
    return () => {
      console.log('Cleanup if needed!');
    };
  }, [count]); // Dependency array ensures this runs only when `count` changes

  return (
    <div>
      <p>This example uses useEffect to update the document title.</p>
      <p>
        Doing so is considered a side effect because it is not directly related
        to rendering content.
      </p>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;
