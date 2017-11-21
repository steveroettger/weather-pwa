import { Component, Input } from '@angular/core';

@Component({
  selector: 'offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css']
})

export class OfflineComponent {
  @Input() public message: string;
}
