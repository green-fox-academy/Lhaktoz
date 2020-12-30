'use strict';

import { Pirate } from './pirate';
import { Ship } from './ship';

let Ship1 = new Ship();
let Ship2 = new Ship();

Ship1.fillShip();

Ship1.representShip()
Ship2.fillShip();
Ship2.representShip();

console.log(Ship1.battle(Ship2));
Ship1.representShip()
Ship2.representShip();