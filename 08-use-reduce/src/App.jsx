import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)

  const handleClick = () => { // Na mesma função do handleClick estamos disparando duas ações -> podemos aplicar o useReducer
    setCount((count) => count + 1) // Permite pegar o valor anterior do count e adicionar +1
    setShowText(!showText) // Realiza a inversão do valor do showText
  }


  return (
    <>
      <div className="App">
        <h1>Front Beginners</h1>
        <h3>{count}</h3>
        <button onClick={handleClick}>
          count is {count}
        </button>
        {showText && <p>Bem-vindo ao melhor canal de front-end!</p>}

      </div>
    </>
  )
}

export default App
