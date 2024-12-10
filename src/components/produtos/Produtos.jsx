import React from "react";
import Title from "../assets/Tittle";
import CamisetaCard from "./CamisetaCard";

const Produtos = () => {
    const camisetas = [
        {
            id: 1,
            nome: "Camiseta Repingado 2022",
            descricao: "Edição interReps",
            cor: "Preto"
        },
        {
            id: 2,
            nome: "Camiseta Repingado 2023",
            descricao: "Edição Churras dos ex",
            cor: "vermelho e preto "
        },
        {
            id: 3,
            nome: "Camiseta Repingado 2024",
            descricao: "Edição churrasco dos pais",
            cor: "branco"
        }
    ];

    return (
        <div className="mt-10 w-full" id="produtos">
            <Title title="PRODUTOS" title2="Conheça nossos produtos"/>
            
            <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {camisetas.map((camiseta) => (
                    <CamisetaCard 
                        key={camiseta.id}
                        id={camiseta.id}
                        nome={camiseta.nome}
                        descricao={camiseta.descricao}
                        cor={camiseta.cor}
                    />
                ))}
            </div>
        </div>
    );
};

export default Produtos; 