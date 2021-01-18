'use strict';

export interface flyable {
  public flyable(): boolean;
  public fly(): void;
  public takeOff(): void;
}