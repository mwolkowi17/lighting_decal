
import { useGLTF, useTexture, Decal } from '@react-three/drei'

export function Ak() {
    const { nodes } = useGLTF('resources/models/ak47.glb')
    //console.log(nodes.ak47)
    const texture = useTexture('resources/decals/melt.png')
    //const tex1 = '/resources/textures/borbon.png'
    return (
        <mesh geometry={nodes.ak47.geometry} material={nodes.ak47.material} >
            <Decal
                //debug // Makes "bounding box" of the decal visible
                position={[0.65, -.5, -14]} // Position of the decal
                rotation={[Math.PI / 2, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
                scale={[1, 6, 4]} // Scale of the decal
            >
                <meshStandardMaterial roughness={1} transparent polygonOffset polygonOffsetFactor={-1} map={texture}>

                </meshStandardMaterial>
            </Decal>
        </mesh>
    )
}