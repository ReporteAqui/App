import { useState } from 'react'
import "@css/navbar.css"
import { Link } from '@tanstack/react-router'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <h1>RECICLAGEM</h1>

        <div className="navlinks">
            <Link to="/">Inicio</Link>
            <Link to="/">Forum</Link>
            <Link to="/">Contato</Link>
        </div>

      </header>
    </>
  )
}