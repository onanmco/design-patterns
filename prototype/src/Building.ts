export class Building {

  private _floors: number;
  public get floors(): number {
    return this._floors;
  }
  public set floors(value: number) {
    this._floors = value;
  }
  private _color: string;
  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }
  private _doorNumber: number;
  public get doorNumber(): number {
    return this._doorNumber;
  }
  public set doorNumber(value: number) {
    this._doorNumber = value;
  }

  constructor(floors: number, color: string, doorNumber: number) {
    this._floors = floors;
    this._color = color;
    this._doorNumber = doorNumber;
  }

  public clone(): Building {
    const prototype = Object.getPrototypeOf(this);
    const cloned = Object.create(prototype);

    cloned._color = this._color;
    cloned._doorNumber = this._doorNumber;
    cloned._floors = this._floors;

    return cloned;
  }
}