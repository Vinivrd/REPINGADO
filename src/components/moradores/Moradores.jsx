import React from "react";
import Card from "./Card";
import Title from "../assets/Tittle";
import moradores from "./dataMoradores";
console.log(moradores);

const Moradores = () => {

    return(
        <div className="mt-10 w-full" id="moradores">
            <Title title="MORADORES" title2="Esses são todos os moradores que moraram aqui na republica Repingado"/>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-7xl mx-auto px-4 mt-10">
            {moradores.map((morador, index) => (
                <Card key={index} morador={morador} />
            ))}
            </div>
        </div>
    )
};

export default Moradores;