import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClocksService } from '../services/clocks-service.service';
import { clock } from '../models/clocks-interface';

@Component({
  selector: 'app-clock-display-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock-display-component.component.html',
  styleUrl: './clock-display-component.component.css'
})
export class ClockDisplayComponentComponent implements OnInit {
  @Input() index: number =0;

  clockList : clock[] = [];
  currentTime: Date = new Date();
  currentClock :clock = this.clockList[this.index];
  clockInterval : any;

  constructor(private clocksService: ClocksService){
    this.clockList = clocksService.getClockList();
  }

  ngOnInit(): void {
      this.clockInterval = interval(1000).subscribe(() => {
      this.currentTime = new Date();
      this.currentClock = this.clockList[this.index]
      this.currentTime = this.getCurrentTimeInTimezone(this.clockList[this.index].timeZone);
      });
  }

  getCurrentTimeInTimezone(timezone: string): Date {
    const timeFormat = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true // Optional: If you prefer 24-hour format
    });
    const timeString = timeFormat.format(new Date());
    const [hours, minutes, seconds] = timeString.split(':').map((part) => parseInt(part, 10));
    
    // Create a new Date object with the formatted time
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }

  get hourAngle(): number {
    return ((this.currentTime.getHours() % 12) + this.currentTime.getMinutes() / 60) * 30;
  }

  get minuteAngle(): number {
    return this.currentTime.getMinutes() * 6;
  }

  get secondAngle(): number {
    return this.currentTime.getSeconds() * 6;
  }

  ngOnDestroy(){
    if (this.clockInterval) {
      this.clockInterval.unsubscribe();
    }
  }
}
