import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.page.html',
  styleUrls: ['./set-reminder.page.scss'],
})
export class SetReminderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedDate: any = Date.now();
  setDate(){
    console.log("date change ",this.selectedDate);
  }
}
