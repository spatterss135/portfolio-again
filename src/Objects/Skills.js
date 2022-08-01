import * as THREE from "three";

const geometry = new THREE.IcosahedronGeometry(9);
const material = new THREE.MeshStandardMaterial({ color: 0x716900 });

const skills = new THREE.Mesh(geometry, material);
skills.position.set(20, 55, -25);
skills.xRotation = 0.02;
skills.halting = false;
skills.originalColor = 0x716900;
skills.name = "skills";
skills.open = false;
skills.hoverColor = 0xA49A0F;
skills.innerHTML = `<table class="table skills">
<thead>
    <tr>
      <th scope="col">Front</th>
      <th scope="col">Back</th>
      <th scope="col">Database</th>
      <th scope="col">Miscellaneous</th>
    </tr>
    <tbody>
    <tr>
      <td>HTML</td>
      <td>Node.js</td>
      <td>MongoDB</td>
      <td>Git</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Express.js</td>
      <td>PostgreSQL</td>
      <td>CLI/CD Commands</td>
    </tr>
    <tr>
    <td>JavaScript</td>
    <td>Flask (Python)</td>
    <td colspan="2">SQLite</td>
    </tr>
    <tr>
    <td>React</td>
    <td>Mongoose</td>
    <td colspan="2">Pandas</td>
    </tr>
    <tr>
    <td colspan="2">Bootstrap</td>
    <td colspan="2">Numpy</td>
    </tr>
    <tr>
    <td colspan="2">Material-UI</td>
    <td colspan="2">Scikit-learn</td>
    </tr>
    <tr>
    <td colspan="4">Redux</td>
    </tr>
    <tr>
    <td colspan="4">TypeScript</td>
    </tr>
  </tbody>
  </thead>

</table>`;

const skillsButton = document.getElementById("skills-button");

export { skills, skillsButton };
