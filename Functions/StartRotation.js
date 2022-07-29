export default function StartRotation(obj, allObjects) {
  if (obj) {
    allObjects.forEach((object) => {
      if (object.name !== obj.name) {
        object.xRotation = 0.01;
      }
    });
  } else {
    allObjects.forEach((object) => {
      object.xRotation = 0.01;
    });
  }
}
