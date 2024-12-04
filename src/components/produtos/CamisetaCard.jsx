
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage } from '@react-three/drei';
import Camiseta3D from './Camiseta3D';

const CamisetaCard = ({ nome, descricao }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[400px] w-full bg-gray-100 rounded-lg shadow-lg">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    shadows
                >
                    <Stage environment="city" intensity={0.6}>
                        {/* Replace OrbitControls with PresentationControls for better fixed camera */}
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={{ mass: 4, tension: 1500 }}
                            rotation={[0, 0, 0]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                        >
                            <Camiseta3D />
                        </PresentationControls>
                    </Stage>
                </Canvas>
            </div>
            <h3 className="text-2xl font-bold mt-4">{nome}</h3>
            <p className="text-gray-600 text-center mt-2">{descricao}</p>
        </div>
    );
};

export default CamisetaCard;