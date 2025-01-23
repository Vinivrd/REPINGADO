import React from "react";
import Title from "../assets/Tittle";

const Sobre = () => {
    return (
        <div id="sobre" className="flex flex-col items-center px-4">
            <Title
                title="SOBRE"
                title2="Nessa seção vamos explicar como funciona a nossa república e um pouco da nossa história"
            />

            <p className="text-center text-lg sm:text-xl md:text-2xl font-extralight mt-10 w-full md:w-[59%]">
            A República Pingado foi fundada em 2019 por Xupeta, Igart, Gico e pelos irmãos Biel e Dog. A ideia
             de criar uma república surgiu inicialmente entre amigos de São Manuel, que decidiram morar juntos
              e compartilhar essa experiência. Com o tempo, a casa foi acolhendo novos moradores de outras cidades, fortalecendo 
              ainda mais a convivência e a construção de novas histórias.
            </p>
        </div>
    );
}

export default Sobre;