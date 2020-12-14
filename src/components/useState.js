import React, { useEffect, useState } from 'react';

function Example() {
  // Declare a new state variable which we will call count
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // update the document using the browser api
    document.title = `You clicked the button ${count} times`

  })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  )
}

export default Example;