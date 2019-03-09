import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  public clockHours: String = '00';
  public clockMinutes: String = '00';
  public clockSeconds: String = '00';

  constructor() { }

  getCurrentTime() {
    return new Date();
  }

  leadingZero(someNumber) {
    return (someNumber + '').length === 1 ? '0' : '';
  }

  startDigitalClock(): void {
    setInterval(() => {
      const currentTime  = this.getCurrentTime();
      this.clockHours = this.leadingZero(currentTime.getHours()) + currentTime.getHours();
      this.clockMinutes = this.leadingZero(currentTime.getMinutes()) + currentTime.getMinutes();
      this.clockSeconds = this.leadingZero(currentTime.getSeconds()) + currentTime.getSeconds();
    }, 1000);
  }

  ngOnInit() {
    this.startDigitalClock();
  }

}
