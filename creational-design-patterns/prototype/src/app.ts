import { Building } from "./Building";

const building1 = new Building(
  3,
  "red",
  1
);

console.log(building1.floors, building1.color, building1.doorNumber);

const building2 = building1.clone();
building2.doorNumber = 2;
console.log(building2.floors, building2.color, building2.doorNumber);