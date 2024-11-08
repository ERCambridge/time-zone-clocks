import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { clock } from '../models/clocks-interface';
import { ClocksService } from '../services/clocks-service.service';
import { ClockFormComponentComponent } from "../clock-form-component/clock-form-component.component";

@Component({
  selector: 'app-settings-component',
  standalone: true,
  imports: [CommonModule, ClockFormComponentComponent],
  templateUrl: './settings-component.component.html',
  styleUrl: './settings-component.component.css'
})
export class SettingsComponentComponent {
  newClock : clock = {timeZone:'America/New_York', isDigital: true}// empty clock object to be changed by html user input (using ngModel)
  clockList : clock[] = [];//clocklist to be used with *ngFor in the html

  constructor(private clocksService: ClocksService){
    this.clockList = clocksService.getClockList();
  }

  addClock(){
    this.clocksService.addClock(this.newClock); // pass the new clock the user created to the clock service to be added to display list
  }
}
