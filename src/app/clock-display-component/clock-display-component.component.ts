import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClocksService } from '../services/clocks-service.service';
import { clock } from '../models/clocks-interface';

@Component({
  selector: 'app-clock-display-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock-display-component.component.html',
  styleUrls: ['./clock-display-component.component.css']
})
export class ClockDisplayComponentComponent implements OnInit, OnDestroy {
  clockList: clock[] = [];
  currentTime: Date = new Date();
  clockInterval: any;

  constructor(private clocksService: ClocksService) {
    this.clockList = clocksService.getClockList();
  }

  ngOnInit(): void {
    // Update the time for each clock every second
    this.clockInterval = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  // Method to get the current time in the specified time zone
  getCurrentTimeInTimezone(timezone: string): Date {
    const timeFormat = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const timeString = timeFormat.format(new Date());
    const [hours, minutes, seconds] = timeString.split(':').map(part => parseInt(part, 10));

    // Create a new Date object with the formatted time
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    return date;
  }

  // Get the hour angle for the analog clock hand based on the index of the clock
  getHourAngle(index: number): number {
    const currentClockTime = this.getCurrentTimeInTimezone(this.clockList[index].timeZone);
    return ((currentClockTime.getHours() % 12) + currentClockTime.getMinutes() / 60) * 30;
  }

  // Get the minute angle for the analog clock hand based on the index of the clock
  getMinuteAngle(index: number): number {
    const currentClockTime = this.getCurrentTimeInTimezone(this.clockList[index].timeZone);
    return currentClockTime.getMinutes() * 6;
  }

  // Get the second angle for the analog clock hand based on the index of the clock
  getSecondAngle(index: number): number {
    const currentClockTime = this.getCurrentTimeInTimezone(this.clockList[index].timeZone);
    return currentClockTime.getSeconds() * 6;
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      this.clockInterval.unsubscribe();
    }
  }
}