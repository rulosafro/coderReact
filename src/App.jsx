import './App.sass'
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Contenedor } from "./components/Contenedor/Contenedor.jsx"
import { MyButton } from "./components/MyButton/MyButton.jsx"
import { Clicker} from './components/Clicker/Clicker.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div> 
      <Navbar/>
      <Contenedor>
        {/* <ItemDetailContainer itemId={5}/> */}
        <ItemListContainer/>
        {/* <h2> Hello</h2>
        <p> Chanchito Feliz   </p> */}
        <MyButton text='hola' variant={1}/>
        <Clicker/>
      </Contenedor>
    </div>
  )
}

export default App
