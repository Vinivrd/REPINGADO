import React from "react";
import Title from "../assets/Tittle";
import CardRole from "./CardRole"
const Role = () => {
    return (
        <div className="relative w-full px-4 md:w-[60%] m-auto pt-11" id="roles">
            <Title title="ROLES" title2="Aqui estão as nossas festas" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/a36317a0ef846a5a8cb19f18226cad4d.png"
                    nomeRole="Nunca Caba Pinga"
                    descricao="Festa organizada pelo ruplica pingado e cabanas"
                    republica="PINGADO & NOIAS"
                />
            </div>
        </div>
    );
}

export default Role;