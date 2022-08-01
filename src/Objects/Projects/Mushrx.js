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
mushrx.hoverColor = 0xAE6BE9
mushrx.position.set(-50, 50, 10);
mushrx.originalCoords = {x: -50, y: 50, z: 10}
mushrx.halting = false;
mushrx.innerHTML = `<div class="card" style="width: 50rem;">
<img src="./pics/mushrx-pic.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Mushrx</h5>
  <p class="card-text">The hardest part of foraging mushrooms is knowing where to start. Mushrx shows you historical data and cross
  references weather data to help you find good areas to start. Uses React for the front end portion, and Flask for
  the back.</p>
  <a href="https://mushrx.herokuapp.com/" class="btn btn-primary">See Project</a>
</div>
</div>`


// (-50, 50) (x: -37.5, y: 25)  (x: -62.5, y: 25)
const mushrxButton = document.getElementById('mushrx-button')
mushrxButton.project = mushrx


  export {mushrx, mushrxButton};