import React from "react";

import NavBar from "./components/navBar/NavBar"
import Home from "./components/home/Home"
import Sobre from "./components/sobre/Sobre";
import Moradores from "./components/moradores/Moradores";
import Casa from './components/casa/Casa'
import Pastas from "./components/pastas/Pastas";
import Role from "./components/roles/Role";
import Footer from "./components/footer/Footer";
import Produtos from "./components/produtos/Produtos";

const App = () => {
  

   return(
     <div>
        <NavBar/>
        <Home/>
        <Sobre/>
        <Casa/>
        <Moradores/>
        <Pastas/>
        <Produtos/>
        <Role/>
        <Footer/>
     </div>
   )
}

export default App;