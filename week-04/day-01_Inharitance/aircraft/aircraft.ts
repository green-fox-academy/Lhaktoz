'use strict';


export class Aircraft {
  protected _maxAmmo: number;
  protected _ammoStorage: number;
  protected _baseDamage: number;
  protected _aircraftType: string;
  protected _missingAmmo: number;
  // protected _allDamage: number;

  constructor(maxAmmo: number, baseDamage: number, aircraftType: string, ammoStorage: number = 0, ) {
    this._ammoStorage = ammoStorage;
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
    this._aircraftType = aircraftType;
  }

  public get ammoStorage(): number {
    return this._ammoStorage
  }

  public get maxAmmo(): number {
    return this._maxAmmo
  }

  public getDMG() {
    return this._ammoStorage * this._baseDamage;
  }

  public set ammoStorage(ammoStorage: number) {
    this._ammoStorage = ammoStorage;
  }

  public fight(): number {
    let damageDealt = this._ammoStorage * this._baseDamage
    this._ammoStorage = 0;
    return damageDealt
  }

  public refill(ammo: number): number {
    let remainingAmmo = 0;
    let missingAmmo = (this._maxAmmo-this._ammoStorage);
    if (missingAmmo <= ammo){
      remainingAmmo = ammo - missingAmmo;
      this._ammoStorage += missingAmmo
    } else {
      this._ammoStorage += ammo
    }
    return remainingAmmo
  }

  public getType(): string{
    return this._aircraftType
  }

  public getStatus(): string {
    return `Type ${this.getType()}, Ammo: ${this._ammoStorage}, Base Damage ${this._baseDamage}, All damage: ${this._baseDamage * this._ammoStorage} `;
  }

  public isPriority(): boolean {
    if(this._aircraftType === 'F35') {
      return true
    } else {
      return false
    }
  }
}