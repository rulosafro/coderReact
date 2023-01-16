import './App.sass'
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Error404 } from './components/Error404/Error404'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Mision } from './components/Mision/Mision'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Formulario } from './components/Formulario/Formulario'
import { MyCartContext, MyCartProvider } from './components/context/MyCartContext'
import { Cart } from './components/Cart/Cart'

function App() {

  return (
    <MyCartProvider>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/coderReact' element={<ItemListContainer/>}/>
          <Route path='/what' element={<Mision/>}/>
          <Route path='/we' element={<Nosotros/>}/>
          <Route path='/do' element={<Portfolio/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/coderReact/cart' element={<Cart/>}/>
          <Route path='/formulario' element={<Formulario/>}/>
          <Route path='/coderReact/formulario' element={<Formulario/>}/>
          <Route path='/busqueda/:busqueda' element={<ItemListContainer/>}/>
          <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/coderReact/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/error404' element={ <Error404/>}/>
          <Route path='*' element={ <Error404/>} />
        </Routes>

        <Footer/>
      </BrowserRouter>
    </MyCartProvider>
  )
}

export default App

{/* <Route path='*' element={ <Navigate to={"/error404"}/>}/> */}

{/* <Routes>
<Route path='/' element={<Navbar bg="#ddd"/>} />
  <Route path='*' element={<Navbar/>} />
</Routes> */}
{/* <Contenedor>
  <ItemListContainer/>
  <MyButton text='hola' variant={1}/>
</Contenedor> */}