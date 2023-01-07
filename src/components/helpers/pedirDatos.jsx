import dataStock from '../../data/MOCK_DATA.json'

export const pedirDatos = () => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve(dataStock)
    }, 2000);
  })
}

export const pedirItemPorId = (id) => {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      const item = dataStock.find((el) => el.id === id)
      resolve(item)
    },2000)
  })
}
