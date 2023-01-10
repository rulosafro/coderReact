import React from 'react'
import { useNavigate } from 'react-router'

const ItemDetail = (id, name, stock, category, image, description, price) => {
  const navigate = useNavigate()
  const handleVoler = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <small>{category}</small>
      <p> {description}</p>
      <p>Precio: {price}</p>
    </div>
  )
}

export default ItemDetail