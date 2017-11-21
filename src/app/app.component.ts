import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progressive Web App (PWA) Proof-of-Concept';

  public isOnline: boolean;

  ngOnInit() {
    if (navigator.onLine) {
      this.isOnline = true;
    } else {
      this.isOnline = false;
    }
  }

  @HostListener('window:offline', ['$event'])
  offline(event) {
    this.isOnline = false;
  }

  @HostListener('window:online', ['$event'])
  online(event) {
    this.isOnline = true;
  }
}
