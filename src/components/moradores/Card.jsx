import React from "react";

const Card = ({morador}) => {
    const handleClick = () => {
        window.open(morador.insta, '_blank');
    };
    const velhos = ["Hill","Mister","Pagode","Dona Lu"]
    const isCurrentResident = parseInt(morador.ano) >= 2023 || velhos.includes(morador.nome);

    return (
        <div 
            className="w-full p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 rounded-lg transition-colors relative"
            onClick={handleClick}
        >
            {isCurrentResident && (
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Atual
                </div>
            )}
            <div className={`flex items-center justify-center rounded-full h-28 w-28 mt-2 ${isCurrentResident ? 'ring-4 ring-green-500 ring-opacity-50' : ''}`}>
                <img 
                    src={`assets/moradores/${morador.foto}.jpg`} 
                    alt={`Foto de ${morador.nome}`} 
                    className="h-full w-full object-cover rounded-full hover:opacity-90 transition-opacity" 
                />
            </div>
            <p className="text-xl mt-2 font-bold">{morador.nome}</p>
            <p className="text-xs font-extralight flex items-center justify-center text-center">{morador.curso}</p>
            <p className="text-xs text-gray-500 mt-1">{morador.ano}</p>
        </div>
    );
};

export default Card;