import React, { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  }

  return (
    <div>
      count {count}
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={incrementByFive}>increase by 5</button>
    </div>
  )
}

export default HookCounterTwo
