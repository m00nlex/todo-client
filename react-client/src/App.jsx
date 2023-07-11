import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Здароу, Алия</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          жмяк {count}
        </button><hr/>
        <p>
           Я хочу есть
        </p>
      </div>
      <p className="read-the-docs">
        <h2>покладай мне еды пж</h2><br/><h1>🙏</h1><br/>или поклади я хз
      </p>
    </>
  )
}

export default App
