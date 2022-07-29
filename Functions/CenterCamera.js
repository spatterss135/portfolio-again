import gsap from "gsap";
import * as THREE from "three"
import {openElement} from './openElement'

function centerCamera(obj, camera, controls, open) {
  const finalPositionZ = open ? obj.position.z: obj.position.z + 40;
  gsap.to(camera.position, { z: finalPositionZ, y: obj.position.y, x: obj.position.x , duration: 1.5 });
  gsap.to(controls.target, { z: obj.position.z, y: obj.position.y, x: obj.position.x , duration: 1.5 });

  if (open){
    openElement(obj)
  }

}

export default centerCamera;
