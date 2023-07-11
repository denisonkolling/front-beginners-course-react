import { useState } from 'react'
import './App.css'

const users = [ {id: 1, name: 'Carlos', address:'Rua São João', age: 28, isAdmin: false}, 
                {id: 2, name: 'Pedro', address:'Rua do Porto', age: 32, isAdmin: true}, 
                {id: 3, name: 'Maria', address:'Rua da Cachoeira', age: 29, isAdmin: false}]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name}, {user.age}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
