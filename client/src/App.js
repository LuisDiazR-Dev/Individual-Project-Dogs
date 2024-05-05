import './App.css';

//* dependencias
// import axios from "axios"; //luego de instalar  axios para manejar peticiones al un server
// import { Routes, Route, useLocation} from "react-router-dom"; //luego de instalar react-router-dom@6.3.0 para rutas
import {useLocation} from "react-router-dom"; //luego de instalar react-router-dom@6.3.0 para rutas

//*components
import NavBar from "./Components/NavBar.jsx";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {/* si es diferente a barra, rendering NavBar */}
      {/* {pathname !== "/" && <NavBar onSearch={onSearch} />} */}
      {pathname === "/" && <NavBar />}
      {/* <NavBar/> */}

      {/* <Routes> */}
        {/* <Route path="/home" element={<Cards characters={characters}  />}/> */}
        
        
        
               
        
        
        {/* <Route path="/" element={<FormLogin login={login} />} /> */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      {/* </Routes> */}
    </div>
    
  );
}

export default App;
