import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public notificationsSupported: boolean;
  public notificationsDenied: boolean;
  public notificationsAllowed: boolean;
  public notificationsDefault: boolean;

  constructor() { this.setNotificationFlags('default'); }

  ngOnInit() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      this.notificationsSupported = true;
      this.setNotificationFlags((Notification as any).permission);
    } else {
      this.notificationsSupported = false;
    }
  }

  public requestDisplayNotificationPermission() {

    Notification.requestPermission().then((status) => {
      this.setNotificationFlags(status);
    });
  }

  private setNotificationFlags(permission: string) {
    if (permission === 'default') {
      this.notificationsDefault = true;
      this.notificationsAllowed = false;
      this.notificationsDenied = false;
    } else if (permission === 'granted') {
      this.notificationsDefault = false;
      this.notificationsAllowed = true;
      this.notificationsDenied = false;
    } else if (permission === 'denied') {
      this.notificationsDefault = false;
      this.notificationsAllowed = false;
      this.notificationsDenied = true;
    }
  }

  private testNotification() {
    if (this.notificationsAllowed) {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('This is a test notification');
      });
    }
  }
}
