'use strict'

import { Aircraft } from './aircraft';
import { F35 } from './f35';
import { F16 } from './F16';

export class Carrier {
  protected _aircrafts: Aircraft[] = [];
  protected _carrierAmmoStorage: number;
  protected _hp: number;

  constructor(carrierAmmoStorage: number, hp: number,){
    this._carrierAmmoStorage = carrierAmmoStorage;
    this._hp = hp;
  }

  public get carrierAmmoStorage(): number {
    return this._carrierAmmoStorage
  }
  public add(newAircraft: Aircraft): void {
    this._aircrafts.push(newAircraft);
  }

  public fill(){
    let aircraftsAmmoNeed = 0;
    for(let i = 0; i < this._aircrafts.length; i++) {
      aircraftsAmmoNeed += (this._aircrafts[i].maxAmmo - this._aircrafts[i].ammoStorage)
    }

    if (this._carrierAmmoStorage <= 0 ) {
      return 'Carrier\'s ammo storage is empty'
    } else if(aircraftsAmmoNeed <= this._carrierAmmoStorage) {
        this._aircrafts.forEach(elem => {
          this._carrierAmmoStorage = elem.refill(this._carrierAmmoStorage)
        })
        return this._carrierAmmoStorage
        
    } else if(aircraftsAmmoNeed > this._carrierAmmoStorage) {
        let priorAircrafts: Aircraft[] = this._aircrafts.filter(aircraft => {
          if(aircraft.isPriority()){
          return aircraft;
        }
        });
        let nonPriorAircrafts: Aircraft[] = this._aircrafts.filter(function(aircraft: Aircraft) {
          if(!aircraft.isPriority()){
          return aircraft;
        }
        });
        priorAircrafts.forEach(elem => {
          this._carrierAmmoStorage = elem.refill(this._carrierAmmoStorage)
        })
        nonPriorAircrafts.forEach(elem => {
          this._carrierAmmoStorage = elem.refill(this._carrierAmmoStorage)
        })
        return this._carrierAmmoStorage
    } 
  }

  public fight(otherCarrier: Carrier): void{
    let allDmg = 0;
    for(let i = 0; i < this._aircrafts.length; i++){
      allDmg +=  this._aircrafts[i].fight()
    }
    otherCarrier._hp -= allDmg
  }

  public getAllDmg(): number {
    let allDmg = 0;
    for(let i = 0; i < this._aircrafts.length; i++){
      allDmg +=  this._aircrafts[i].getDMG()
    }
    return allDmg
  }
  public getStatus(): string {
    if (this._hp > 0){
    let aircraftsinfo: string = '';
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      aircraftsinfo += `\r\n ${this._aircrafts[i].getStatus()}`;
    }
    return `HP: ${this._hp}, Aircraft count: ${this._aircrafts.length} Ammo Storage: ${this._carrierAmmoStorage}, Total damage: ${this.getAllDmg()}` + aircraftsinfo
  } else {
    return 'It\'s dead Jim :('
  }
  }

}

let firstf35 = new F35();
let secondf35 = new F35();
let firstf16 = new F16();
let secondf16 = new F16();


let firstCarrier = new Carrier(30, 50);
let secondCarrier = new Carrier(0, 10)

firstCarrier.add(firstf35)
firstCarrier.add(secondf35)
firstCarrier.add(firstf16)
firstCarrier.add(secondf16)


console.log(firstCarrier.fill())

firstCarrier.fight(secondCarrier);
console.log(firstCarrier.getStatus())
console.log(secondCarrier.getStatus())

