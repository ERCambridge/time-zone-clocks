import { Component, input, Output } from '@angular/core';
import { clock } from '../models/clocks-interface';
import { ClocksService } from '../services/clocks-service.service';
import { ClockDisplayComponentComponent } from "../clock-display-component/clock-display-component.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clocks-component',
  standalone: true,
  imports: [CommonModule, ClockDisplayComponentComponent,FormsModule],
  templateUrl: './clocks-component.component.html',
  styleUrl: './clocks-component.component.css'
})
export class ClocksComponentComponent {
  clockList : clock[] = []; //clocklist to be used with *ngFor in the html

  constructor(private clocksService: ClocksService){
    this.clockList = clocksService.getClockList();
  }
}
