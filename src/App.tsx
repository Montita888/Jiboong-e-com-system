import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blagit commit -mnk">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Jiboong E-commerce System</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Create a “Sign Up” UI form Edit BuG
      </p>
      <p>
        Build a product grid UI V3.0.0
      </p>
      <p>
        Test CI V7.0.0
      </p>
      <p>
        Test CI V7.0.1
      </p>
      <p>
        Test CI V7.0.2
      </p>
      <p>
        Test CI V7.0.3
      </p>
      <p>
        Test CI V7.0.4
      </p>
      <p>
        Test CD V8.0.0
      </p>
      <p>
        Test CD V8.0.1
      </p>
      <p>
        test-deploy 2
      </p>
        <p>
        test-deploy 3
      </p>
    </>
  )
}

export default App
