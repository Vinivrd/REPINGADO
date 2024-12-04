import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Moradores from "./components/moradores/Moradores";
import Pastas from "./components/pastas/Pastas";
import Produtos from "./components/produtos/Produtos";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Moradores />
            <Pastas />
            <Produtos />
        </div>
    );
}

export default App; 