import React from "react";

const CardRole = ({imgRole,nomeRole,descricao,republica}) => {
    return (
        <div className="max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-200">
            <div className="flex items-center justify-center mb-6">
                <img className="w-full h-auto rounded-lg object-cover" src={imgRole} alt={nomeRole} />
            </div>
            <a className="flex items-center justify-center">
                <h5 className="mb-4 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-black nanum-pen-script cursos-pointer-none">
                    {nomeRole}
                </h5>
            </a>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
                {descricao}
            </p>
            <a
                href="https://www.instagram.com/caio_braga1405/"
                className="flex items-center justify-center text-lg font-medium text-amber-500 hover:underline"
            >
                {republica}
            </a>
        </div>
    );
};

export default CardRole;
