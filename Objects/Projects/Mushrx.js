import * as THREE from "three";
import { OneMinusSrcAlphaFactor } from "three";
import { InteractionManager } from "three.interactive";

const geometry =  new THREE.CapsuleGeometry( 2, 2, 4, 8 );
const material = new THREE.MeshStandardMaterial({ color: 0x973CE8 });

const mushrx = new THREE.Mesh(geometry, material);
mushrx.originalColor = 0x973CE8;
mushrx.name = "mushrx";
mushrx.rotationNumber = 0.01
mushrx.open = false
mushrx.hoverColor = 0xff6300
mushrx.position.set(-50, 50, 10);
mushrx.originalCoords = {x: -50, y: 50, z: 10}
mushrx.halting = false;

const mushrxButton = document.getElementById('mushrx-button')


  export {mushrx, mushrxButton};