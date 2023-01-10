import {useEffect, useState} from 'react'
import { pedirDatos} from '../helpers/pedirDatos.jsx'
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from 'react-router';



export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()
    console.log( categoryId)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter(prod => prod.category === categoryId))
                } else {
                    setProductos(res)
                }}
            )
            .catch((err) => {
                console.log("Ups parece haber un error");
            })
    }, [categoryId])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

