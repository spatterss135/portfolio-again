import * as THREE from "three";
import { InteractionManager } from "three.interactive";

const geometry = new THREE.OctahedronGeometry(10);

const material = new THREE.MeshPhongMaterial({ color: 0x001278 });

const contact = new THREE.Mesh(geometry, material);
contact.originalColor = 0x001278;
contact.name = "contact";
contact.open = false;
contact.hoverColor = 0x1027a8;
contact.position.set(140, 60, -100);
contact.xRotation = 0.02;
contact.yRotation = 0.02;
contact.zRotation = 0.02;
contact.halting = false;
contact.innerHTML = `<form id='contact-form' action="https://formsubmit.co/d674de16c1f55299eb82506ecd884d7e" method="POST">
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email"  name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="message" class="form-label">Message</label>
<input type="text" name='message' class="form-control" id="mesage">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>`;

const contactButton = document.getElementById("contact-button");

export { contact, contactButton };
