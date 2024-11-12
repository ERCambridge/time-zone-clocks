import { Component, Input } from '@angular/core';
import { clock } from '../models/clocks-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClocksService } from '../services/clocks-service.service';

@Component({
  selector: 'app-clock-form-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './clock-form-component.component.html',
  styleUrl: './clock-form-component.component.css'
})
export class ClockFormComponentComponent {
  timeZones : string[] =[]
  clockList : clock[] = []
  newClock : clock = {timeZone:'America/New_York', isDigital: true}

  constructor(private clocksService: ClocksService){
    this.clockList = clocksService.getClockList();
  }

  ngOnInit() {
    this.timeZones = Intl.supportedValuesOf('timeZone'); //populate timezone array with valid values on init
    
  }
  addClock(){
    const clockToAdd = { ...this.newClock };
    console.log(this.clockList)
    this.clocksService.addClock(clockToAdd); // pass the new clock the user created to the clock service to be added to display list
    this.newClock = { timeZone: 'America/New_York', isDigital: true };
  }

  deleteClock(index:number){
   this.clocksService.deleteClock(index) //pass index to clock service (deleteClock)
  }

  editClock(index: number, newClock:clock){
    this.clocksService.editClock(index, newClock)
  }
}
