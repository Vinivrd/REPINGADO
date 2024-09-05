import React from "react";
import Title from "../assets/Tittle";

const Sobre = () => {
    return (
        <div id="sobre" className="flex flex-col items-center">
            <Title
                title="SOBRE"
                title2="Nessa seção vamos explicar como funciona a nossa republica e um pouco da nossa história"
            />

            <p className="text-center text-2xl font-extralight mt-10 w-[59%]">
                A República Pingado foi fundada em 2019 pelos irmãos Biel e Dog, junto de
                Xupeta e Igart. A ideia de morar junto e formar uma república veio do
                pessoal de São Manuel a princípio, e com o tempo foi vindo novos moradores
                de outras cidades, como Ribeirão Preto.
            </p>
        </div>
    );
}

export default Sobre;