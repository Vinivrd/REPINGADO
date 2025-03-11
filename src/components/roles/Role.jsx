import React from "react";
import Title from "../assets/Tittle";
import CardRole from "./CardRole"
import ViewTracker from "../ViewTracker";

const Role = () => {
    return (
        <ViewTracker eventType="reach_roles">
            <div className="relative w-full px-4 md:w-[80%] m-auto pt-11" id="roles">
                <Title title="EVENTOS" title2="Esses são os principais eventos do ano " />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <CardRole
                        imgRole="/assets/role/3.jpg"
                        nomeRole="Nunca Caba Pinga"
                        descricao="O maior evento organizado por república da calourada"
                        republica="PINGADO & CABAÑAS"
                    />

                    <CardRole
                        imgRole="/assets/role/1.jpg"
                        nomeRole="Churras das famílias"
                        descricao="Churrasco que reúne a família de todos os moradores"
                        republica="PINGADO & FAMÍLIAS"
                    />
                    
                    <CardRole
                        imgRole="/assets/role/2.png"
                        nomeRole="Churras dos ex"
                        descricao="Churrasco que reúne todos os moradores que já passaram pela república"
                        republica="PINGADO & EX-MORADORES"
                    />
                </div>
            </div>
        </ViewTracker>
    );
}

export default Role;