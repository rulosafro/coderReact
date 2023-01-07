
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
                    <p>Precio: {prod.price}</p>
                </div>
            )
            ))}
        </section>
    </div>
  )
}

export default ItemList