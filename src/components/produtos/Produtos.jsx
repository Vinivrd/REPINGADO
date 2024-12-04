import React from "react";
import Title from "../assets/Tittle";
import CamisetaCard from "./CamisetaCard";

const Produtos = () => {
    return (
        <div className="mt-10 w-full" id="produtos">
            <Title title="PRODUTOS" title2="Conheça nossos produtos oficiais"/>
            
            <div className="max-w-7xl mx-auto px-4 mt-10">
                <CamisetaCard 
                    nome="Camiseta Repingado 2024" 
                    descricao="Edição especial comemorativa"
                />
            </div>
        </div>
    );
};

export default Produtos; 