import './App.css'
import {Route, Routes} from 'react-router-dom'

// paginas
import Home from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import CrearUsuario from './pages/CrearUsuario'
import ListarUsuario from './pages/ListarUsuario'
import EditarUser from './pages/Editar'

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/nosotros' element={<Nosotros/>}></Route>
                <Route path='/contacto' element={<Contacto/>}></Route>
                <Route path='/crearusuario' element={<CrearUsuario/>}></Route>
                <Route path='/listarusuario' element={<ListarUsuario/>}></Route>
                <Route path='/edit/:id' element={<EditarUser/>}></Route>
            </Routes>
        </>
    )
}

export default App
