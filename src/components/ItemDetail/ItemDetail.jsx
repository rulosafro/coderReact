import { Navigate, useNavigate } from "react-router"
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react"
import { Opciones } from "../Opciones/Opciones"

const opciones = [
  {value:"1", text: "opción 1"},
  {value:"2", text: "opción 2"},
  {value:"3", text: "opción 3"},
  {value:"4", text: "opción 4"}
]

const ItemDetail = ({id, name, stock, category, image, description, price }) => {
  const [cantidad, setCantidad] = useState(1)
  const [opcion, setOpcion] = useState()
  const navigate = useNavigate()

  const handleVolver = () => {
    navigate(-1)
  }

  const handleAgregar = () => {
    console.log({
      id, name, stock, category, image, description, price, cantidad, opcion
    });
  }


  return (
    <div>
      <h2 className="">{name}</h2>
      <img src={image} alt={name} />
      <small>{category}</small>
      <p> {description}</p>
      <p>Precio: {price}</p>
      <p>{id}</p>
 
      <ItemCount 
        cantidad={cantidad}
        setCantidad={setCantidad}
        onAdd={handleAgregar}
        max={stock}
      /> 

      <Opciones
        options={opciones}
        set={setOpcion}
        />

      {/* <button onClick={handleVolver}>Volver</button> */}
    </div>
  )
}

export default ItemDetail