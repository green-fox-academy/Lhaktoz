'use strict';
import { printable } from './printable'

export class Todo implements printable{
  protected _task: string;
  protected _priority: string;
  protected _isDone: boolean;

  public printAllFields(): void {
    console.log(`Task: ${this._task} | Priority: high | Done: true ${this._priority} | Done: ${this._isDone}`);
  }
}