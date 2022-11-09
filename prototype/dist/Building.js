"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
class Building {
    constructor(floors, color, doorNumber) {
        this._floors = floors;
        this._color = color;
        this._doorNumber = doorNumber;
    }
    get floors() {
        return this._floors;
    }
    set floors(value) {
        this._floors = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get doorNumber() {
        return this._doorNumber;
    }
    set doorNumber(value) {
        this._doorNumber = value;
    }
    clone() {
        const prototype = Object.getPrototypeOf(this);
        const cloned = Object.create(prototype);
        cloned._color = this._color;
        cloned._doorNumber = this._doorNumber;
        cloned._floors = this._floors;
        return cloned;
    }
}
exports.Building = Building;
