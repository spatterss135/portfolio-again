import * as THREE from "three";

export default function blink(obj){
    // var gmap = THREE.ImageUtils.loadTexture('glowmap.png');
    obj.material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0xffffff, shininess: 0xffffff} );
    setTimeout(() => {
        obj.material = new THREE.MeshStandardMaterial({ color: obj.originalColor });
    }, 100)
    setTimeout(() => {
        obj.material = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive: 0xffffff, shininess: 0xffffff} );
    }, 200)
    setTimeout(() => {
        obj.material = new THREE.MeshStandardMaterial({ color: obj.originalColor });
    }, 300)
}