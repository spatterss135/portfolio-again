import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry =  new THREE.CapsuleGeometry( 2, 2, 4, 8 );
const material = new THREE.MeshStandardMaterial({ color: 0x56E83C });

const social = new THREE.Mesh(geometry, material);
social.originalColor = 0x56E83C;
social.name = "social";
social.open = false
social.rotationNumber = 0.01
social.hoverColor = 0xff6300
social.position.set(-37.5, 25, 10);
social.originalCoords = {x: -37.5, y: 25, z: 10}
social.halting = false;

const socialButton = document.getElementById('social-button')


  export {social, socialButton};