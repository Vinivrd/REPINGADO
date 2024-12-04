import React from "react";

const CardPasta = ({ icone: Icon, nomePasta, descricao, lider, instagram }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-200 mb-4 flex flex-col h-full">
            <div className="flex-1">
                <div className="flex items-center justify-center text-4xl bg-white p-4 rounded-full shadow-md hover:bg-gray-200 mb-4">
                    <Icon />
                </div>
                <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-black text-center">
                    {nomePasta}
                </h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                    {descricao}
                </p>
            </div>
            
            <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center font-medium text-blue-600 hover:underline"
            >
                Líder: {lider}
            </a>
        </div>
    );
};

export default CardPasta;
