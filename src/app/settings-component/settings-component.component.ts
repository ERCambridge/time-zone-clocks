import { Component } from '@angular/core';
import { clock } from '../models/clocks-interface';
import { ClocksService } from '../services/clocks-service.service';
import { ClockFormComponentComponent } from "../clock-form-component/clock-form-component.component";

@Component({
  selector: 'app-settings-component',
  standalone: true,
  imports: [ClockFormComponentComponent],
  templateUrl: './settings-component.component.html',
  styleUrl: './settings-component.component.css'
})
export class SettingsComponentComponent {
  newClock : clock = {timeZone:'', isDigital: false}// empty clock object to be changed by html user input (using ngModel)
  editIndex : number = 0;
  deleteIndex: number = 0;

  constructor(private clocksService: ClocksService){}

  addClock(){
    this.clocksService.addClock(this.newClock); // pass the new clock the user created to the clock service to be added to display list
  }
  editClock(){
    this.clocksService.editClock(this.editIndex, this.newClock); // pass the new clock the user created to the clock service to be added to display list
  }

  deleteClock(){
    this.clocksService.deleteClock(this.deleteIndex); // pass the new clock the user created to the clock service to be added to display list
  }
}
