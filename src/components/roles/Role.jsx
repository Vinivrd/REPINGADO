import React from "react";
import Title from "../assets/Tittle";
import CardRole from "./CardRole"
const Role = () => {
    return (
        <div className="relative w-full px-4 md:w-[80%] m-auto pt-11" id="roles">
            <Title title="EVENTOS" title2="Esses são os principais eventos do ano " />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/a36317a0ef846a5a8cb19f18226cad4d.png"
                    nomeRole="Nunca Caba Pinga"
                    descricao="O maior evento organizado por república da calourada"
                    republica="PINGADO & CABAÑAS"
                />

                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/a36317a0ef846a5a8cb19f18226cad4d.png"
                    nomeRole="Churras das famílias"
                    descricao="Churrasco que reúne a família de todos os moradores"
                    republica="PINGADO"
                />
                
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/a36317a0ef846a5a8cb19f18226cad4d.png"
                    nomeRole="Churras do ex"
                    descricao="Churrasco que reúne todos os moradores que já passaram pela república"
                    republica="PINGADO & EX-MORADORES"
                />
            </div>
            
        </div>
    );
}

export default Role;