import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import { FaWhatsapp } from 'react-icons/fa';
import Camiseta3D from './Camiseta3D';

const CamisetaCard = ({ id, nome, descricao, cor }) => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '5511969238993';
        const message = `Olá! Gostaria de saber mais sobre a ${nome}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-[400px] w-full bg-gray-50">
                <Canvas
                    camera={{ position: [10, 0, 7], fov: 50 }}
                    shadows
                >
                    <Stage environment="city" intensity={0.6}>
                        <Camiseta3D id={id} />
                    </Stage>
                    <OrbitControls
                        enableZoom={false}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />
                </Canvas>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{nome}</h3>
                <p className="text-gray-600 mt-2">{descricao}</p>
                <div className="flex items-center mt-3">
                    <span className="text-sm font-medium text-gray-500">Cor:</span>
                    <span className="ml-2 text-sm text-gray-700">{cor}</span>
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CamisetaCard;