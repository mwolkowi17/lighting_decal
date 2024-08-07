
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Block() {
    const { nodes } = useGLTF('resources/models/block-avatar.glb')
    const gltf = useLoader(GLTFLoader, 'resources/models/block-avatar.glb')


    return <primitive object={gltf.scene} scale={5} position={[-4, 1, 0]} rotation={[0, 0, 0]} />
}