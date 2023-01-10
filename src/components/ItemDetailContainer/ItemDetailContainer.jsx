import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';


const ItemDetailContainer = (itemId) => {
  
  const [item, setItem] = useState(null)
  const { categoryId } = useParams()
  
  useEffect(() => {
    pedirItemPorId(Number(itemId))
      .then((data) => {
        setItem(data)
      })
  }, [itemId])


  return (
    <div>
      {
        item && <ItemDetail {...item}/>
      }
    </div>
  )
}

export default ItemDetailContainer