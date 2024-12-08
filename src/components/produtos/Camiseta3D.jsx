import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Camiseta3D = ({ id }) => {
    const meshRef = useRef();
    const { scene } = useGLTF('/models/tshirt/scene.gltf');

    // Clone a cena para cada instância
    const clonedScene = React.useMemo(() => {
        return scene.clone();
    }, [scene]);

    return (
        <group ref={meshRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
            <primitive object={clonedScene} />
        </group>
    );
};

export default Camiseta3D;

useGLTF.preload('/models/tshirt/scene.gltf');
 