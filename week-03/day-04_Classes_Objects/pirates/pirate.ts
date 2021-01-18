'use strict';

export class Pirate {
  protected _isCaptain: boolean;
  protected _isDead: boolean;
  protected _drunkLvl: number;
  protected _isPassedOut: boolean;

  constructor(isCaptain: boolean = false, drunkLvl: number = 0, isDead: boolean = false, isPassedOut = false){
    this._drunkLvl = drunkLvl;
    this._isDead = isDead;
    this._isPassedOut = isPassedOut;
    this._isCaptain = isCaptain;
  }

  public get isCaptain(): boolean {
    return this._isCaptain;
  }

  public get drunkLvl(): number {
    return this._drunkLvl;
  }

  public get isDead(): boolean {
    return this._isDead;
  }

  public get isPassedOut(): boolean {
    return this._isPassedOut;
  }

  public drinkSomeRum(): void {
    if (this._isDead){
      console.log('He\'s dead.')
    } else {
    this._drunkLvl ++;
    }
  }

  public howsItGoingMate(): void{
    if (this._isDead){
      console.log('He\'s dead.')}
    else if (this._drunkLvl < 5){
      console.log('Pour me anudder!');
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
    }
  }
  
  die(){
    this._isDead = true;
  }
  brawl(otherPirate: Pirate): void {
    let randomNumber: number = Math.floor(Math.random()*3)+1;
    if (otherPirate._isDead || this._isDead) {
      console.log('One of the pirate is dead, or both of them.')
    } else if(randomNumber === 1) {
      this._isDead = true;
    } else if (randomNumber === 2) {
      otherPirate._isDead = true;
    } else {
      this._isPassedOut = true;
      otherPirate._isPassedOut = true;
    }
  }
}