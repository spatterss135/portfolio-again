import "../dist/style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { InteractionManager } from "three.interactive";
import { education, educationButton } from "./Objects/Education";
import { skills, skillsButton } from "./Objects/Skills";
import centerCamera from "./Functions/CenterCamera";
import { HaltRotation, stop } from "./Functions/HaltRotation";
import {
  homeButton,
  panCamera,
  projectButton,
  samhomeButton,
} from "./Functions/PanCamera";
import { ChangeColor } from "./ChangeColor";
import { closeElements } from "./Functions/CloseElements";
import blink from "./Functions/blink";
import StartRotation from "./Functions/StartRotation";
import { mushrx, mushrxButton } from "./Objects/Projects/Mushrx";
import { galaga, galagaButton } from "./Objects/Projects/Galaga";
import { social, socialButton } from "./Objects/Projects/Social";
import { contact, contactButton } from "./Objects/Contact";

// Hardcoded properties
const NAVBAR_HEIGHT = document.querySelector(".navbar").clientHeight;
let focusedOnProject = false;

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
renderer.setSize(window.innerWidth, window.innerHeight + NAVBAR_HEIGHT);
camera.position.setZ(80);
camera.position.setY(-20);
camera.origin = {z: 80, y: -20, x: 0};
// DomEvent manager
const interactionManager = new InteractionManager(
  renderer,
  camera,
  renderer.domElement
);

// Add Objects

const allObjects = [education, skills];
const allProjects = [galaga, social, mushrx];
const allProjectButtons = [galagaButton, socialButton, mushrxButton];
scene.add(education);
interactionManager.add(education);
scene.add(skills);
interactionManager.add(skills);
scene.add(mushrx);
interactionManager.add(mushrx);
scene.add(galaga);
interactionManager.add(galaga);
scene.add(social);
interactionManager.add(social);
scene.add(contact);
interactionManager.add(contact);

// Listeners

allProjects.forEach((project) => {
  project.addEventListener("click", () => {
    focusedOnProject = true;
    closeElements();
    centerCamera(project, camera, controls, true);
    StartRotation(undefined, allObjects);
  });
});
allProjects.forEach((project) => {
  project.addEventListener("mouseover", (e) => {
    ChangeColor(project, e);
  });
});

allProjects.forEach((project) => {
  project.addEventListener("mouseout", (e) => {
    ChangeColor(project, e);
  });
});

allProjectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    focusedOnProject = true;
    closeElements();
    centerCamera(button.project, camera, controls, true);
    StartRotation(undefined, allObjects);
  });
});
allProjectButtons.forEach((button) => {
  button.addEventListener("mouseover", (e) => {
    e.stopPropagation();
    blink(button.project);
  });
});

contactButton.addEventListener("click", () => {
  focusedOnProject = false;
  if (
    (camera.position.z === contact.position.z + 40) &
    (camera.position.x === contact.position.x) &
    (Math.abs(camera.position.y - contact.position.y) < 0.1)
  ) {
    centerCamera(contact, camera, controls, true);
    HaltRotation(contact);
    
  } else {
    centerCamera(contact, camera, controls, false);
  }
  StartRotation(undefined, allObjects);
  closeElements();
});

contactButton.addEventListener("mouseover", () => {
  blink(contact);
});
contact.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  centerCamera(contact, camera, controls, true);
  HaltRotation(contact);
  StartRotation(contact, allObjects);
});
contact.addEventListener("mouseover", (e) => {
  ChangeColor(contact, e);
});
contact.addEventListener("mouseout", (e) => {
  ChangeColor(contact, e);
});
// Center camera on education but dont open, make any object not spinning start to spin
educationButton.addEventListener("click", () => {
  focusedOnProject = false;
  if (
    (camera.position.z === education.position.z + 40) &
    (camera.position.x === education.position.x) &
    (Math.abs(camera.position.y - education.position.y) < 0.1)
  ) {
    centerCamera(education, camera, controls, true);
    HaltRotation(education);
    
  } else {
    centerCamera(education, camera, controls, false);
  }
  StartRotation(undefined, allObjects);
  closeElements();
});

educationButton.addEventListener("mouseover", () => {
  blink(education);
});
education.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  centerCamera(education, camera, controls, true);
  HaltRotation(education);
  StartRotation(education, allObjects);
});
education.addEventListener("mouseover", (e) => {
  ChangeColor(education, e);
});
education.addEventListener("mouseout", (e) => {
  ChangeColor(education, e);
});
// Center camera on skills but dont open, make any object not spinning start to spin
skillsButton.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  if (
    (camera.position.z === skills.position.z + 40) &
    (camera.position.x === skills.position.x) &
    (camera.position.y === skills.position.y)
  ) {
    centerCamera(skills, camera, controls, true);
  } else {
    centerCamera(skills, camera, controls, false);
  }

  StartRotation(undefined, allObjects);
});
skillsButton.addEventListener("mouseover", () => {
  blink(skills);
});
skills.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  centerCamera(skills, camera, controls, true);
  HaltRotation(skills);
  StartRotation(skills, allObjects);
});

skills.addEventListener("mouseover", (e) => {
  ChangeColor(skills, e);
});
skills.addEventListener("mouseout", (e) => {
  ChangeColor(skills, e);
});

homeButton.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  panCamera(camera, allObjects, controls);
});

samhomeButton.addEventListener("click", () => {
  focusedOnProject = false;
  closeElements();
  panCamera(camera, allObjects, controls);
});

projectButton.addEventListener("mouseover", (e) => {
  if (e.target.nodeName === "A") {
    allProjects.forEach((project) => {
      blink(project);
    });
  }
});

projectButton.addEventListener("click", (e) => {
  if (e.target.nodeName === "A") {
    focusedOnProject = false;
    closeElements();
    centerCamera(
      { position: { z: 20, x: -50, y: (275 / 8)-(NAVBAR_HEIGHT/6) } },
      camera,
      controls,
      false
    );
    StartRotation(undefined, allObjects);
  }
});

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
    .map(() => THREE.MathUtils.randFloatSpread(600));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(1500).fill().forEach(addStar);

function animateSpin(obj) {
  obj.rotation.x += obj.xRotation;
  if (obj.yRotation){
    obj.rotation.x += obj.xRotation;
  }
  if (obj.zRotation){
    obj.rotation.z += obj.zRotation;
  }
}
let clock = new THREE.Clock();
var time = 0;
var radius = 25 / Math.sqrt(3);
function rotateProject(obj, num) {
  obj.position.x = -50 + Math.sin(time + Math.PI * 0.5 * num) * radius;
  obj.position.y = 275 / 8 + Math.cos(time + Math.PI * 0.5 * num) * radius;
  obj.rotationNumber += 0.01;
  time = clock.getElapsedTime() * 0.1 * Math.PI;
}

function checkForOverlappingSheets() {
  const sheets = document.querySelectorAll("#sheet");
  if (sheets.length > 1) {
    for (let i = 1; i < sheets.length; i++) {
      sheets[i].remove();
    }
  }
}

function animate() {
  checkForOverlappingSheets();
  requestAnimationFrame(animate);
  animateSpin(education);
  animateSpin(contact);
  stop(education);
  animateSpin(skills);
  if (!focusedOnProject) {
    rotateProject(galaga, 0);
    rotateProject(social, Math.PI / 1.2);
    rotateProject(mushrx, Math.PI / 2.4);
  }

  stop(skills);
  controls.update();
  interactionManager.update();
  renderer.render(scene, camera);
}
animate();