import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry =  new THREE.CapsuleGeometry( 2, 2, 4, 8 );
const material = new THREE.MeshStandardMaterial({ color: 0x3CDBE8 });

const galaga = new THREE.Mesh(geometry, material);
galaga.originalColor = 0x3CDBE8;
galaga.name = "galaga";
galaga.open = false
galaga.rotationNumber = 0.01
galaga.hoverColor = 0x83EBF4
galaga.position.set(-62.5, 25, 10);
galaga.originalCoords = {x: -62.5, y: 25, z: 10}
galaga.halting = false;
galaga.innerHTML = `<div class="card" style="width: 40rem;">
<img src="./pics/galaga-pic.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Space Shooters Extravaganza</h5>
  <p class="card-text">Earth is under attack by the Glorgons! Protect humanity at all costs. Built using Phaser.js, a comprehensive library for creating video games in JavaScript.</p>
  <a href="https://cranky-villani-a903bb.netlify.app/" class="btn btn-primary">See Project</a>
</div>
</div>`
const galagaButton = document.getElementById('galaga-button')
galagaButton.project = galaga

  export {galaga, galagaButton};