import React from "react";
import Title from "../assets/Tittle";
import Carousel from "../home/Carousel";

const Casa = () => {
    return(
        <div className="mt-10" id="casa">
            <Title title="FOTOS" title2="Fotos da nossa casa"/>
            <Carousel/> 
        </div>
    );
}

export default Casa;