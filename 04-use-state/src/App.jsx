import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [valueInput, setValueInput] = useState('Texto inicial...')

  const add = () => {
    setCount(count + 1)
  }

  const onChangeInput = (event) => {
    setValueInput(event.target.value)
  }


  return (
    <>
      <h1>Front Beginners</h1>
      <div className="card">
        <button onClick={add}>count is {count}</button>
      </div>
      <div>
        <input onChange={onChangeInput} type="text" />
      </div>
      <h3>{valueInput}</h3>
    </>
  )
}

export default App
