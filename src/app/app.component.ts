import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Notices', url: '/notices', icon: 'alert-circle' },
    { title: 'Documents', url: '/documents', icon: 'file-tray-stacked' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Sign-in', url: '/sign-in', icon: 'log-in' },
    { title: 'Sign-out', url: '/sign-out', icon: 'log-out' },
    
    
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
