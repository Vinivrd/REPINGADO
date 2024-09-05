import React from "react";

const CardRole = ({imgRole,nomeRole,descricao,republica}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-100 dark:border-gray-200 ">
            <div className="flex items-center justify-center text-4xl  mb-4">
                <img  className ="rounded-lg" src={imgRole} alt="" />
            </div>
            <a className="flex items-center justify-center">
                <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-black nanum-pen-script cursos-pointer-none">
                    {nomeRole}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
                {descricao}
            </p>
            <a
                href="https://www.instagram.com/caio_braga1405/"
                className="flex items-center justify-center font-medium text-amber-500 hover:underline"
            >
                {republica}
            </a>
        </div>
    );
};

export default CardRole;
