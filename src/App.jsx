import './App.sass'
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Contenedor } from "./components/1clasesPasadas/Contenedor/Contenedor.jsx"
import { MyButton } from "./components/1clasesPasadas/MyButton/MyButton.jsx"
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Error404 } from './components/Error404/Error404'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Mision } from './components/Mision/Mision'
import { Portfolio } from './components/Portfolio/Portfolio'

function App() {

  return (

    <BrowserRouter>
        <Navbar/>
        {/* <Routes>
          <Route path='/' element={<Navbar bg="#ddd"/>} />
          <Route path='*' element={<Navbar/>} />
        </Routes> */}


      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/coderReact' element={<ItemListContainer/>}/>
        <Route path='/what' element={<Mision/>}/>
        <Route path='/we' element={<Nosotros/>}/>
        <Route path='/do' element={<Portfolio/>}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/busqueda/:busqueda' element={<ItemListContainer/>}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/error404' element={ <Error404/>}/>
        <Route path='*' element={ <Error404/>} />
        {/* <Route path='*' element={ <Navigate to={"/error404"}/>}/> */}

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App


{/* <Contenedor>
  <ItemListContainer/>
  <MyButton text='hola' variant={1}/>
</Contenedor> */}