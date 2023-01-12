import React from 'react'
import { Link } from "react-router-dom";
import './Filtros.sass'

export const Filtros = () => {
  return (
    <div>
      <p>Filtros</p>
      <ul>
        <li><Link className="filterLink" to="/productos/cat1"> A1</Link></li>
        <li><Link className="filterLink" to="/productos/cat2"> A2</Link></li>
        <li><Link className="filterLink" to="/productos/cat3"> A3</Link></li>
        <li><Link className="filterLink" to="/productos/cat4"> A4</Link></li>
      </ul>
    </div>
  )
}
