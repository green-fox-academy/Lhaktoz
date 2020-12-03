
import { Thing } from './thing';
import { Fleet } from './fleet';



// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let thingsArray: Thing[] = initializeThing();

function initializeThing(): Thing[] {
  return [
 new Thing('Get milk'),
 new Thing('Remove the obstacles'),
 new Thing('Stand up'),
 new Thing('Eat lunch'),
];
}

let fleet = new Fleet();
// console.log(thingsArray)


for (let i = 0; i < thingsArray.length ; i++) {
  fleet.add(thingsArray[i])
}

fleet.getThings()[2].complete();
fleet.getThings()[3].complete();
console.log(fleet.toString());


// console.log(fleet.getThings()[0].getCompleted());

