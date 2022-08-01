import * as THREE from "three";

export function ChangeColor(obj, e){
    if (e.type === "mouseover"){
        obj.material = new THREE.MeshStandardMaterial({ color: obj.hoverColor });
    }
    else if (e.type === "mouseout"){
        obj.material = new THREE.MeshStandardMaterial({ color: obj.originalColor });
    }
 
}