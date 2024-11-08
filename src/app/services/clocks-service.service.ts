import { Injectable } from '@angular/core';
import { clock } from '../models/clocks-interface';
@Injectable({
  providedIn: 'root'
})
export class ClocksService {

  private clocks: clock[] =[];

  constructor() {
    this.clocks.push({timeZone:"America/New_York", isDigital: true})
    this.clocks.push({timeZone:"America/Chicago", isDigital: false})
   }

  getClockList() : clock[]{
    return this.clocks;
  }

  //adds a clock passed as a parameter (created from user input) to the list of clocks to be displayed
  addClock(newClock:clock){
    this.clocks.push(newClock)
  }

  //deletes a clock from the list by using an index passed throught the parameter 
  deleteClock(index:number){  
    this.clocks.splice(index,1);
  }

  editClock(index:number, newClock: clock ){
    this.clocks[index].timeZone = newClock.timeZone
    this.clocks[index].isDigital = newClock.isDigital
  }

}
