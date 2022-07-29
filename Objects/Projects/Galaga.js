import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry =  new THREE.CapsuleGeometry( 2, 2, 4, 8 );
const material = new THREE.MeshStandardMaterial({ color: 0x3CDBE8 });

const galaga = new THREE.Mesh(geometry, material);
galaga.originalColor = 0x3CDBE8;
galaga.name = "galaga";
galaga.open = false
galaga.rotationNumber = 0.01
galaga.hoverColor = 0xff6300
galaga.position.set(-62.5, 25, 10);
galaga.originalCoords = {x: -62.5, y: 25, z: 10}
galaga.halting = false;

const galagaButton = document.getElementById('galaga-button')


  export {galaga, galagaButton};