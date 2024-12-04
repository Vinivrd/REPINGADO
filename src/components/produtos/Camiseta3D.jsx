import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Camiseta3D = () => {
    const meshRef = useRef();
    const { scene } = useGLTF('/models/tshirt/scene.gltf');

    // Configuração inicial do modelo
    useEffect(() => {
        if (scene) {
            scene.scale.set(0.5, 0.5, 0.5);
            scene.position.set(0, -1, 0);
            scene.rotation.set(0, 0, 0);
        }
    }, [scene]);

    // Animação de rotação
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
        }
    });

    // Renderização do modelo
    return (
        <group ref={meshRef}>
            {scene && <primitive object={scene} />}
        </group>
    );
};

export default Camiseta3D;

// Pré-carrega o modelo
useGLTF.preload('/models/tshirt/scene.gltf');
 