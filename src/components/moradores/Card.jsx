import React from "react";

const Card = ({morador}) => {
    return (
        <div className="w-full p-2 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center rounded-full h-28 w-28 mt-2">
                <img src={`assets/moradores/${morador.foto}.jpg`} alt="Foto de Vinicius" className="h-full w-full object-cover rounded-full" />
            </div>
            <p className="text-xl mt-2 font-bold">{morador.nome}</p>
            <p className="text-xs font-extralight flex items-center justify-center text-center">{morador.curso}</p>
            <p className="text-xs font-extralight flex items-center justify-center">{morador.facul}</p>
        </div>
    );
};

export default Card;