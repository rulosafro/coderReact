import React from 'react'
import "./Opciones.sass"

export const Opciones = ({options, set}) => {

  const handleChange = (e) => {
    set(e.target.value)
  }  
    
  return (
    <select >
        {options.map((opt) => <option value={opt.value}> {opt.text} </option>)}
    </select>
  )
}
