import gsap from "gsap";

function HaltRotation(obj) {
    obj.halting = true;
  let direction = obj.rotation.x % Math.PI;
  const inflection = Math.PI / 2
  if (direction < inflection) {
    obj.xRotation = -obj.xRotation
  }
 
}

function stop(obj) {
    if (obj.halting) {
        if (obj.rotation.x% Math.PI < 0.01) {
            obj.xRotation = 0
            obj.halting = false
        }
    }
}

export {HaltRotation, stop};
