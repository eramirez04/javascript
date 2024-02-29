import {Route, Routes,} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Formulario from "./pages/Formulario.jsx";
import Perfil from "./pages/Perfil.jsx";



const App =() => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<Formulario/>}></Route>
                <Route path='/perfil' element={<Perfil/>}></Route>
            </Routes>
        </>
    )
}

export default App
