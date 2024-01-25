/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/threeD/tenkai.glb 
Author: NexusB (https://sketchfab.com/NexusB)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/malevolent-shrine-jujutsu-kaisen-efcf94d9cf03434db7b0978144b500b6
Title: Malevolent Shrine | Jujutsu Kaisen
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tenkai(props) {
  const { nodes, materials } = useGLTF("/threeD/tenkai.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.04}>
        <mesh
          geometry={nodes.Horns1_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          geometry={nodes.Innards_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
          position={[0, 6.241, 0]}
          scale={[11.706, 12.991, 10.75]}
        />
        <mesh
          geometry={nodes.Branches_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
          
        />
        <mesh
          geometry={nodes.Bull_Skulls1_Bull_Skull_Material_0.geometry}
          material={materials.Bull_Skull_Material}
          
        />
        <mesh
          geometry={nodes.Mouths1_Mouths_Material_0.geometry}
          material={materials.Mouths_Material}
          
        />
        <mesh
          geometry={nodes.Skulls_Human_Skull_Material_0.geometry}
          material={materials.Human_Skull_Material}
          
        />
        <mesh
          geometry={nodes.Ribs_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
        />
        <mesh
          geometry={nodes.pCylinder52_Extra_Stuff_Material_0.geometry}
          material={materials.Extra_Stuff_Material}
          
        />
        <mesh
          geometry={nodes.Shrine2_Shrine_Material_0.geometry}
          material={materials.Shrine_Material}
          
        />
       
      </group>
    </group>
  );
}

useGLTF.preload("/threeD/tenkai.glb");