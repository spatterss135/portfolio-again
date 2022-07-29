import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry = new THREE.TorusGeometry(4.8, 3, 30, 200);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });

const education = new THREE.Mesh(geometry, material);
education.originalColor = 0xff6347;
education.name = "education";
education.open = false
education.hoverColor = 0xff6300
education.position.set(0, 0, 0);
education.xRotation = 0.01;
education.halting = false;

const educationButton = document.getElementById('education-button')


  export {education, educationButton};