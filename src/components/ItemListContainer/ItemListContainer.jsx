import {useEffect, useState} from 'react'
import { pedirDatos} from '../helpers/pedirDatos.jsx'
import ItemList from "../ItemList/ItemList.jsx";



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log("Ups parece haber un error");
            })
    }, [])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

