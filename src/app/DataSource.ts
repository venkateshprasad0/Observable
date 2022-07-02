import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataSource {

    constructor() { }

    numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 20, 32, 232, 242,2 ,232];
    public getNumber() {
        return from(this.numberArray);
    }

    public getNumberArray(){
        return of(this.numberArray);
    }
}