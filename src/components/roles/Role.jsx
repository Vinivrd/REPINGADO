import React from "react";
import Title from "../assets/Tittle";
import CardRole from "./CardRole"
const Role = () => {
    return (
        <div className="relative w-[60%] m-auto pt-11" id="roles">
            <Title title="ROLES" title2="Aqui estão as nossas festas" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/49ac02ba4f69cce52a310a406e1fc2b9.png"
                    nomeRole="Pinga do Pecado"
                    descricao="Festa organizada pelo ruplica pinga do pecado com muitas do job"
                    republica="PINGADO"
                />
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/a36317a0ef846a5a8cb19f18226cad4d.png"
                    nomeRole="Nuncaba Pinga"
                    descricao="Festa organizada pelo ruplica pingado e safados"
                    republica="PINGADO & NOIAS"
                />
                <CardRole
                    imgRole="https://d106p58duwuiz5.cloudfront.net/event/cover/9370e7785308870be4fb1f7f05e2c021.jpg"
                    nomeRole="Flipingado"
                    descricao="Festa de adulto nao pode entrar criança, onde todo mundo  e todo mundo transa"
                    republica="PINGADO"
                />
            </div>
        </div>
    );
}

export default Role;