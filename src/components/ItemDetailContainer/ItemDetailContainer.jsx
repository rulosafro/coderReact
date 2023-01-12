import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState(null)
  const [error, setError] = useState(null)
  const { itemId } = useParams()

  console.log(itemId);
  
  useEffect(() => {
    setError(null)

    pedirItemPorId( Number(itemId) )
      .then((data) => {
        console.log(data)
        setItem(data)})
      .catch((err) => {
        setError(err.error)
      })
    }, [itemId])

  return (
    <div>
      {
        error
        ? error
        : item && <ItemDetail {...item}/>
      }
      <p>Hola</p>
    </div>
  )
}

export default ItemDetailContainer