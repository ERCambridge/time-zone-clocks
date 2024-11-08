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
  @Input() index!: number;

  timeZones : string[] =[]
  clockList : clock[] = []
  currentClock : clock = this.clockList[this.index]

  constructor(private clocksService: ClocksService){
    this.clockList = clocksService.getClockList();
  }

  ngOnInit() {
    this.timeZones = Intl.supportedValuesOf('timeZone'); //populate timezone array with valid values on init
    this.currentClock = this.clockList[this.index]
  }

  deleteClock(){
   this.clocksService.deleteClock(this.index) //pass index to clock service (deleteClock)
  }

  editClock(){
    this.clocksService.editClock(this.index, this.currentClock)
    console.log(`isDigital is ${this.currentClock.isDigital}`)
    console.log(`timeZone is ${this.currentClock.timeZone}`)
  }
}
