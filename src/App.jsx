import { useState } from 'react'
import './App.css'

let userName = "Mohit"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h3>Footer: {count}</h3>
      <h4>Hello my name is {userName}, This is my first React Project.</h4>
    </>
  )
}

export default App
