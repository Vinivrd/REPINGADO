import React from "react";
import Title from "../assets/Tittle";
import CardPasta from "./PastaCard";

import { MdCleaningServices } from "react-icons/md"; //limpeza
import { FaGear } from "react-icons/fa6"; //manutenção
import { GiRelationshipBounds } from "react-icons/gi";
import { SiGooglemarketingplatform } from "react-icons/si";
import { TbDog } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbCirclesRelation } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";

const Pastas = () => {
    const dataPastas = [
        {
            icone: MdCleaningServices,
            nomePasta: "LIMPEZA",
            descricao: "Pasta destinada a manter a organização dos ambientes, garantindo um espaço agradável para os moradores.",
            lider: "PINGUIM"
        },
        {
            icone: FaGear,
            nomePasta: "MANUTENÇÃO",
            descricao: "Pasta destinada a garantir as boas condições da estrutura da casa",
            lider: "Kenner"
        },
        {
            icone: GiRelationshipBounds,
            nomePasta: "RELAÇÕES EXTERIORES",
            descricao: "Pasta destinada a estabelecer e manter contatos e parcerias com outras repúblicas, organizações, e entidades externas.",
            lider: "Vini"
        },
        {
            icone: SiGooglemarketingplatform,
            nomePasta: "MARKETING",
            descricao: "Pasta destinada a promover a imagem da casa, gerar conteúdo e organizar eventos que aumentem a visibilidade.",
            lider: "Menex"
        },
        {
            icone: TbDog,
            nomePasta: "DECO",
            descricao: "Essa pasta é destinada a cuidar do cachorro.",
            lider: "Pressa"
        },
        {
            icone: MdOutlineProductionQuantityLimits,
            nomePasta: "PRODUTOS",
            descricao: "Pasta destinada ao planejamento e desenvolvimento dos produtos da República, como camiseta, colete, corta-vento, etc..",
            lider: "Vini"
        },
        {
            icone: TbCirclesRelation,
            nomePasta: "RECURSOS HUMANOS",
            descricao: "Pasta destinada a gerir as relações entre os moradores, promover um ambiente saudável e garantir que todos contribuam de forma justa para o bom funcionamento da casa.",
            lider: "Dudu"
        },
        {
            icone: MdOutlineAttachMoney,
            nomePasta: "FINANCEIRO",
            descricao: "Pasta destinada ao controle das despesas da casa e a garantir que a República seja financeiramente saudável.",
            lider: "Canastra"
        }
    ];

    return (
        <div className="relative w-[60%] m-auto pt-11" id="pastas">
            <Title title="PASTAS" title2="Nossas pastas e o que são" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {dataPastas.map((info, index) => (
                    <CardPasta
                        key={index}
                        icone={info.icone}
                        nomePasta={info.nomePasta}
                        descricao={info.descricao}
                        lider={info.lider}
                    />
                ))}
            </div>
        </div>
    );
};

export default Pastas;
