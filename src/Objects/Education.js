import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry = new THREE.TorusGeometry(10, 6, 30, 200);
const material = new THREE.MeshStandardMaterial({ color: 0x8E5201 });

const education = new THREE.Mesh(geometry, material);
education.originalColor = 0x8E5201;
education.name = "education";
education.open = false
education.hoverColor = 0xff6300
education.position.set(0, 0, -200);
education.xRotation = 0.02;
education.halting = false;
education.innerHTML = `<div class="container">
<div class="card mb-3" style="max-width: 540px; min-height: 200px">
  <div class="row g-0 my-auto">
    <div class="col-md-4 my-auto">
    <a href="https://www.lawrence.edu/">
      <img src="./pics/lawrence.png" class="img-fluid rounded-start mx-auto" alt="...">
      </a>
    </div>
    <div class="col-md-8">
      <div class="card-body my-3">
        <h5 class="card-title">Lawrence University</h5>
        <p class="card-text">Bachelor of Arts-BA, Chemistry</p>
        <p class="card-text"><small class="text-muted">2015-2019</small></p>
      </div>
    </div>
  </div>
</div>


<div class="card mb-3" style="max-width: 540px; min-height: 200px">
  <div class="row g-0 my-auto">
    <div class="col-md-4 my-auto">
    <a href="https://www.wisc.edu/">
      <img src="./pics/madison.png" class="img-fluid rounded-start mx-auto" alt="...">
      </a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">UW-Madison Schol of Engineering</h5>
        <p class="card-text">Certificate, Full-Stack Development</p>
        <p class="card-text"><small class="text-muted">2021-2022</small></p>
      </div>
    </div>
  </div>
</div>
</div>`;

const educationButton = document.getElementById('education-button')


  export {education, educationButton};