import * as THREE from "three";


const geometry = new THREE.TorusGeometry(4.8, 3, 30, 200);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });

const skills = new THREE.Mesh(geometry, material);
skills.position.set(20, 55, -25);
skills.xRotation = 0.01;
skills.halting = false;
skills.originalColor = 0xff6347;
skills.name = "skills";
skills.open = false
skills.hoverColor = 0xff6300

const skillsButton = document.getElementById('skills-button')


  export {skills, skillsButton};