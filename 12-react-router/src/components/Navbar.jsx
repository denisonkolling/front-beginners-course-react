import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Front Beginner</Link>
      <ul>
        <li>
          <Link to="/about">Sobre</Link></li>
        <li>
          <Link to="/profile">Perfil</Link></li>
      </ul>
    </nav>
  )
}
