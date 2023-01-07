import React, { useEffect, useState } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (itemId) => {
  const [] = useState(null)
  // console.log(item);
  
  useEffect(() => {
    pedirItemPorId(itemId)
      .then((data) => {
        setItem(data)
      })
  }, [itemId])


  return (
    <div>
      {
        item && <ItemDetail/>
      }
    </div>
  )
}

export default ItemDetailContainer