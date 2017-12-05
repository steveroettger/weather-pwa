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
  public notificationsSubscribed: boolean;

  constructor() { this.setNotificationFlags('default'); }

  ngOnInit() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      this.notificationsSupported = true;
      this.setNotificationFlags((Notification as any).permission);
      this.setSubscriptionFlags();
    } else {
      this.notificationsSupported = false;
    }
  }

  public requestDisplayNotificationPermission() {

    Notification.requestPermission().then((status) => {
      this.setNotificationFlags(status);
    });
  }

  public subscribeToNotifications() {
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: this.urlBase64ToUint8Array(
        'BB28Y98Mn9felmviJn4pKZn3pdWVx1XzkmzBoEiZ2kRE8Tv-YJLk9fZWtlH5h66JqN-f86G2ThlmySXiFMy6eEU'
      )
    };

    navigator.serviceWorker.getRegistration().then((registration) => {
      registration.pushManager.subscribe(subscribeOptions).then((subscription) => {
        console.log('Received subscription: ', JSON.stringify(subscription));
        this.setSubscriptionFlags();
      });
    });
  }

  public unsubscribeFromNotifications() {
    navigator.serviceWorker.getRegistration().then((registration) => {
      registration.pushManager.getSubscription().then((subscription) => {
        subscription.unsubscribe().then((success) => {
          console.log('Unsubscribed from push notifications');
          this.setSubscriptionFlags();
        }).catch((err) => {
          console.log('Failed to unsubscribe from push notifications: ', err);
        });
      });
    });
  }

  private urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
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

  private setSubscriptionFlags() {
    navigator.serviceWorker.getRegistration().then((registration) => {
      registration.pushManager.getSubscription().then((subscription) => {
        if (subscription && subscription !== null) {
          this.notificationsSubscribed = true;
        } else {
          this.notificationsSubscribed = false;
        }
      });
    });
  }

  private testNotification() {
    if (this.notificationsAllowed) {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('This is a test notification');
      });
    }
  }
}
