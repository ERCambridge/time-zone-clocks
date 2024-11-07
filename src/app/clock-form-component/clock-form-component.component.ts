import { Component } from '@angular/core';
import { ClocksService } from '../services/clocks-service.service';
import { clock } from '../models/clocks-interface';
@Component({
  selector: 'app-clock-form-component',
  standalone: true,
  imports: [],
  templateUrl: './clock-form-component.component.html',
  styleUrl: './clock-form-component.component.css'
})
export class ClockFormComponentComponent {
  addClock(){
    
  }
}
