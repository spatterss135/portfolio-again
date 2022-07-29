import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { InteractionManager } from "three.interactive";
import { MathUtils } from "three";
import {education, educationButton} from "./Objects/Education";
import {skills, skillsButton} from "./Objects/Skills";
import centerCamera from "./Functions/CenterCamera";
import {HaltRotation, stop} from "./Functions/HaltRotation";
import { homeButton, panCamera } from "./Functions/PanCamera";
import { ChangeColor } from "./ChangeColor";
import { closeElements } from "./Functions/CloseElements";
import blink from "./Functions/blink";
import StartRotation from "./Functions/StartRotation";
import { mushrx, mushrxButton } from "./Objects/Projects/Mushrx";
import { galaga, galagaButton } from "./Objects/Projects/Galaga";
import {social, socialButton } from "./Objects/Projects/Social"



// Hardcoded properties
const NAVBAR_HEIGHT = document.querySelector(".navbar").clientHeight


// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(
  window.innerWidth,
  window.innerHeight + NAVBAR_HEIGHT
);
camera.position.setZ(100);
const CAMERA_ORIGIN = camera.position
// DomEvent manager
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

// Add Objects

const allObjects = [education, skills]
scene.add(education)
interactionManager.add(education);
scene.add(skills)
interactionManager.add(skills);
scene.add(mushrx)
interactionManager.add(mushrx);
scene.add(galaga)
interactionManager.add(galaga);
scene.add(social)
interactionManager.add(social);

// Listeners
educationButton.addEventListener('click', () => {
  centerCamera(education, camera, controls, false)
  StartRotation(undefined, allObjects)
  closeElements()
});
educationButton.addEventListener('mouseover', () => {
  blink(education)
});
education.addEventListener('click', () => {
  closeElements()
  centerCamera(education, camera, controls, true)
  HaltRotation(education)
  StartRotation(education, allObjects)
});

skillsButton.addEventListener('click', () => {
  closeElements()
  centerCamera(skills, camera, controls, false)
  StartRotation(undefined, allObjects)
});
skillsButton.addEventListener('mouseover', () => {
  blink(skills)
});
skills.addEventListener('click', () => {
  closeElements()
  centerCamera(skills, camera, controls, true)
  HaltRotation(skills)
  StartRotation(skills, allObjects)
});

homeButton.addEventListener('click', () => {
  closeElements()
  panCamera(camera, allObjects, controls, CAMERA_ORIGIN)
})

education.addEventListener('mouseover', (e) => {
  ChangeColor(education, e)
})
education.addEventListener('mouseout', (e) => {
  ChangeColor(education, e)
})

skills.addEventListener('mouseover', (e) => {
  ChangeColor(skills, e)
})
skills.addEventListener('mouseout', (e) => {
  ChangeColor(skills, e)
})




// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(400));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(1000).fill().forEach(addStar);

function animateSpin(obj){
  obj.rotation.x += obj.xRotation
}
let clock = new THREE.Clock()
var time = 0;
var radius = 25/Math.sqrt(3);
function rotateProject(obj, num){
  let time = clock.getElapsedTime() * 0.1 * Math.PI;
  obj.position.x = Math.cos(time + Math.PI * 0.5* num) * radius + obj.originalCoords.x;
  obj.position.y = Math.sin(time + Math.PI * 0.5* num) * radius +  obj.originalCoords.y;
  obj.rotationNumber += 0.01
}

function animate() {
  requestAnimationFrame(animate);
  animateSpin(education)
  stop(education)
  animateSpin(skills)
  rotateProject(galaga, 0)
  rotateProject(social, 1)
  rotateProject(mushrx, 2)
  stop(skills)
  controls.update();
  interactionManager.update();
  renderer.render(scene, camera);
}
animate();
