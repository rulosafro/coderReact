import { Link } from "react-router-dom"

const ItemList = ({productos}) => {
  return (
    <div>
        <h2>Servicios</h2>
        
        <section>
            { productos.map((prod => (
                <div key={prod.id}>
                    <img src={prod.image} alt={prod.name}/>
                    <h4>{prod.name}</h4>
                    <p>{prod.description}</p>
                    <p>Precio: {prod.price} <span> | </span><small>[{prod.category}]</small></p>
                    <button><Link to={`/detail/${prod.id}`}>Ver más</Link></button>
                </div>
            )
            ))}
        </section>
    </div>
  )
}

export default ItemList