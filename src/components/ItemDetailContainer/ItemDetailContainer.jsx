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
        setItem(data)
      })
      .catch((err) => {
        setError(err.error)
      })
    }, [itemId])

  return (
    <div className='container mx-auto px-4'>
      {
        error
        ? error
        : item && <ItemDetail {...item}/>
      }
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
    </div>
  )
}

export default ItemDetailContainer