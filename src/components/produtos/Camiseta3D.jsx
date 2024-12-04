import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

const Camiseta3D = () => {
    const meshRef = useRef();
    const { scene } = useGLTF('/models/tshirt/scene.gltf');

    // Animação de rotação
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
      });

    return (
        <>
            <group ref={meshRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
                {scene && <primitive object={scene} />}
            </group>
            <OrbitControls
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
              enableZoom={false}
              enablePan={false}
            />
        </>
    );
};

export default Camiseta3D;

useGLTF.preload('/models/tshirt/scene.gltf');
 