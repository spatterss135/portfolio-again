import gsap from "gsap";
import * as THREE from "three"

function panCamera(camera, allObjects, controls) {
  gsap.to(camera.position, { z: camera.origin.z, y: camera.origin.y, x: camera.origin.x, duration: 3 });
  allObjects.forEach((object) => object.xRotation = 0.01)
  gsap.to(controls.target, { z: 0, y: 0, x: 0, duration: 3 });
}

const homeButton = document.getElementById('home')
const samhomeButton = document.getElementById('sam-home')

const projectButton = document.getElementById('project-button')

export {panCamera, homeButton, projectButton, samhomeButton}