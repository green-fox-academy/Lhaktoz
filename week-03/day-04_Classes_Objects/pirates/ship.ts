'use strict'

import { Pirate } from './pirate';

export class Ship {
  protected _crew: Pirate[];
  protected _captain: Pirate;
  protected _aliveCrewMembers: number;
 
  public get crew() {
    return this._crew
  }

  constructor(){
    this._crew = [];
  }

  public fillShip(): void {
    if(!this._captain){
      this._captain = new Pirate(true)
    } 
    for(let i = 0; i < Math.floor(Math.random()*10); i++) {
      this._crew.push(new Pirate());
    }
    this._aliveCrewMembers = this._crew.length;
  }
  
  public representShip(): void {
    if(this._captain.isDead) {
    console.log(`The ship's captain is dead unfotunately.`)
    } else if(this._captain.isPassedOut) {
      console.log(`The ship's captain is passed out, he drunk ${this._captain.drunkLvl} Rum`)
    } else {
      console.log(`the ship's captain is alive and  conscious, he drunk ${this._captain.drunkLvl} Rum.`)
    }
    let countAlivePirate: number = 0;
    this._crew.map(function(pirate: Pirate): number {
      if(!pirate.isDead) {
        countAlivePirate ++
      }
      return countAlivePirate
    })
    console.log(`The number of alive pirates in the crew : ${countAlivePirate} `)
  }

  public battle(otherShip: Ship): boolean {
    if (this._aliveCrewMembers-this._captain.drunkLvl > otherShip._aliveCrewMembers-otherShip._captain.drunkLvl) {
      for( let i = 0; i < Math.floor(Math.random()*otherShip._aliveCrewMembers)+1; i++) {
        otherShip._crew[i].die();
        otherShip._aliveCrewMembers --;
      }
      for (let i = 0; i < this._crew.length; i++) {
        this._crew[i].drinkSomeRum();
      }
      this._captain.drinkSomeRum();
      return true
    }
    if(this._aliveCrewMembers-this._captain.drunkLvl < otherShip._aliveCrewMembers-otherShip._captain.drunkLvl){
      for( let i = 0; i < Math.floor(Math.random()*this._aliveCrewMembers)+1; i++) {
        this._crew[i].die();
        this._aliveCrewMembers --;
      }
      for (let i = 0; i < otherShip._crew.length; i++) {
        otherShip._crew[i].drinkSomeRum();
      }
      otherShip._captain.drinkSomeRum();
      return false
    }
  }
  

}


