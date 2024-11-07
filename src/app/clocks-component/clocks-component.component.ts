import { Component } from '@angular/core';
import { clock } from '../models/clocks-interface';
import { ClocksService } from '../services/clocks-service.service';
import { ClockDisplayComponentComponent } from "../clock-display-component/clock-display-component.component";

@Component({
  selector: 'app-clocks-component',
  standalone: true,
  imports: [ClockDisplayComponentComponent],
  templateUrl: './clocks-component.component.html',
  styleUrl: './clocks-component.component.css'
})
export class ClocksComponentComponent {

}
