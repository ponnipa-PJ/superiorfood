import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { PostDataService } from '../../../post-data.service';
import { StorageService } from '../../../storage.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { AuthenticationService } from '../../../auth/authentication.service';
@Component({
  selector: 'app-calendarpm',
  templateUrl: './calendarpm.page.html',
  styleUrls: ['./calendarpm.page.scss'],
})

export class CalendarpmPage implements OnInit {

  //#region data
  data;
  calendarPlugins = [dayGridPlugin, interactionPlugin]
  calendar;
  empID;
  month;
  year;
  customername;
  options: any;
  eventsModel: any;
  date;
  str = "123";
  items;
  myempID;
  url: SafeResourceUrl;
  link;
  @ViewChild("fullcalendar", { static: true }) fullcalendar: FullCalendarComponent;
  @ViewChild("external", { static: true }) external: ElementRef;
  sanitizer: DomSanitizer;
  //#endregion

  //#region constructor
  constructor(private postDataService: PostDataService,
    private storageService: StorageService,
    private auth:AuthenticationService,
    sanitizer: DomSanitizer) {
    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.myempID = this.items[i].empID;
        console.log(this.myempID);
      }
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      this.myempID = this.myempID
      this.month = month
      this.year = year
      this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/WebFormCalendar.aspx' + '?empid=' + this.myempID + '&year=' + this.year + '&month=' + this.month);
      // this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:41669/Web/RP_CusTransToReport.aspx' + '?tranID=83203a1c-89d7-4090-a9cb-a351e4c90953');
    });
  }

  //#endregion

  //#region start
  ngOnInit() {
  }
  //#endregion

}

