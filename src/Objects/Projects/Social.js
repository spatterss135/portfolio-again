import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry =  new THREE.CapsuleGeometry( 2, 2, 4, 8 );
const material = new THREE.MeshStandardMaterial({ color: 0x56E83C });

const social = new THREE.Mesh(geometry, material);
social.originalColor = 0x56E83C;
social.name = "social";
social.open = false
social.rotationNumber = 0.01
social.hoverColor = 0x86F273
social.position.set(-37.5, 25, 10);
social.originalCoords = {x: -37.5, y: 25, z: 10}
social.halting = false;
social.innerHTML = `<div class="card" style="width: 30rem;">
<img src="./pics/social-app-pic.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Social App</h5>
  <p class="card-text">Full-Stack Application for a generic social media website. Uses React for the front-end, and Nodejs for the back.
  Uses Sequelize to connect to a PostgreSQL Database. Material-UI was used for most of the styling.nt.</p>
  <a href="https://social-app-client.herokuapp.com/" class="btn btn-primary">See Project</a>
</div>
</div>`

const socialButton = document.getElementById('social-button')
socialButton.project = social

  export {social, socialButton};