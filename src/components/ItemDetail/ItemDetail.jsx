const ItemDetail = ({id, name, stock, category, image, description, price }) => {


  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <small>{category}</small>
      <p> {description}</p>
      <p>Precio: {price}</p>
      <p>{id}</p>
    </div>
  )
}

export default ItemDetail