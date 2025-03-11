import React from "react";
import ConversionTracker from "./components/ConversionTracker";
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
        <ConversionTracker eventType="page_view" />
        <NavBar/>
        <Home/>
        <Sobre/>
        <Casa/>
        <Moradores/>
        <Role/>
        <Produtos/>
        <Pastas/>
        <Footer/>
     </div>
   )
}

export default App;