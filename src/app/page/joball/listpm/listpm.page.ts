import { Component, OnInit, Pipe } from '@angular/core';
import { AuthServiceService } from '../../../auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { StorageService } from '../../../storage.service';
import { PostDataService } from '../../../post-data.service';

@Component({
  selector: 'app-listpm',
  templateUrl: './listpm.page.html',
  styleUrls: ['./listpm.page.scss'],
})

export class ListpmPage implements OnInit {
 
  //#region  data

  data: any;
  Today;
  month;
  intMonth;
  intYear;
  textShow;
  all;
  install;
  finish;
  items;
  myempID;
  job;
  listpm;
  cus;
  cusid;
  json;
  jData;
  customer;
  empid;
  listpmdetail;
  //#endregion

  //#region constructor
  constructor(public DataService: AuthServiceService,
    private route: ActivatedRoute,
    public navCtrl: NavController,
    private storageService: StorageService,
    private postDataService: PostDataService) {

    this.json;
    this.listpmdetail = [];

    this.job = [];
    
    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.myempID = this.items[i].empID;
        console.log(this.myempID);
      }
    });
    //this.listpm = [];
    this.ChangeMonth();

    

  }

  //#endregion

  //#region event click

  loadItems() {
    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.myempID = this.items[i].empID;
        console.log(this.myempID);
      }
    });
  }

  click(item) {
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        currency: JSON.stringify(item.value)
      }
    };
    console.log(navigationExtras);

    this.navCtrl.navigateForward(['/joball/listpm/detaillistpm'], navigationExtras);

  }

  //#endregion

  //#region  start

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.empid = JSON.parse(params["data"]);
      this.empid = this.empid.EmpID
      console.log("receive", this.empid);
    });
    
    this.job.empID = "01225f87-e6cc-4725-afe2-7e5a63f9a183";
    this.job.month = 8;
    this.job.year = 2019;

    this.postDataService.postListpm(this.job).then(work => {
      this.listpm = work;
      console.log(this.listpm);
      

      for (let i = 0; i < this.listpm.length; i++) {
        this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
      }

      console.log('listpm',this.listpm);
      
    });
  }

  //#endregion

  //#region Month
  ChangeMonth() {
    const month = new Date().getMonth() + 1;
    this.intMonth = month;
    const year = new Date().getFullYear();
    this.intYear = year;

    //#region changemonth  
    if (month == 1) {
      this.month = 'มกราคม'
      this.intMonth = 1;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 2) {
      this.month = 'กุมภาพันธ์'
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 3) {
      this.month = 'มีนาคม'
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 4) {
      this.month = 'เมษายน'
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 5) {
      this.month = 'พฤษภาคม'
      this.intMonth = 5;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 6) {
      this.month = 'มิถุนายน'
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 7) {
      this.month = 'กรกฎาคม'
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 8) {
      this.month = 'สิงหาคม'
      this.all = '8';
      this.finish = '8';
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 9) {
      this.month = 'กันยายน'
      this.all = '9';
      this.finish = '9';
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    if (this.intMonth == 10) {
      this.month = 'ตุลาคม'
      this.all = '10';
      this.finish = '10';
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 11) {
      this.month = 'พฤศจิกายน'
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }
    if (month == 12) {
      this.month = 'ธันวาคม'
      this.intMonth = 12;
      this.textShow = this.month + " " + this.intYear
    }
    //#endregion

    // if (this.intYear > year) {
    //   this.intYear = year
    // }
    console.log(this.intMonth)
    console.log(this.intYear)
    console.log(this.myempID);

    this.job.empID = "01225f87-e6cc-4725-afe2-7e5a63f9a183";
    this.job.month = 8;
    this.job.year = 2019;

    this.postDataService.postListpm(this.job).then(work => {
      this.listpm = work;

      for (let i = 0; i < this.listpm.length; i++) {
        this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
      }

      console.log('listpmnow',this.listpm);
    });
  }

  changeMonthNext() {
    // const year = new Date().getFullYear();
    //#region nextmonth
    if (this.month == 'มกราคม') {
      this.month = 'กุมภาพันธ์'
      this.all = '2';
      this.finish = '2';
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กุมภาพันธ์') {
      this.month = 'มีนาคม'
      this.all = '3';
      this.finish = '3';
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'มีนาคม') {
      this.month = 'เมษายน'
      this.all = '4';
      this.finish = '4';
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'เมษายน') {
      this.month = 'พฤษภาคม'
      this.all = '5';
      this.finish = '5';
      this.intMonth = 5;
    }
    else if (this.month == 'พฤษภาคม') {
      this.month = 'มิถุนายน'
      this.all = '6';
      this.finish = '6';
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'มิถุนายน') {
      this.month = 'กรกฎาคม'
      this.all = '7';
      this.finish = '7';
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กรกฎาคม') {
      this.month = 'สิงหาคม'
      this.all = '8';
      this.finish = '8';
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'สิงหาคม') {
      this.month = 'กันยายน'
      this.all = '9';
      this.finish = '9';
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กันยายน') {
      this.month = 'ตุลาคม'
      this.all = '10';
      this.finish = '10';
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'ตุลาคม') {
      this.month = 'พฤศจิกายน'
      this.all = '11';
      this.finish = '11';
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'พฤศจิกายน') {
      this.month = 'ธันวาคม'
      this.all = '12';
      this.finish = '12';
      this.intMonth = 12;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'ธันวาคม') {
      this.month = 'มกราคม'
      this.intMonth = 1;
      this.intYear = this.intYear + 1
      this.textShow = this.month + " " + this.intYear
    }
    // if (this.intYear > year) {
    //   this.intYear = year
    // }
    //#endregion
    console.log(this.intMonth)
    console.log(this.intYear)

    this.job.empID = "01225f87-e6cc-4725-afe2-7e5a63f9a183";
    this.job.month = 8;
    this.job.year = 2019;


    this.postDataService.postListpm(this.job).then(work => {
      this.listpm = work;

      for (let i = 0; i < this.listpm.length; i++) {
        this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
      }

      console.log('listpmnext',this.listpm);
    });
  }

  changeMonthBack() {
    //#region 
    if (this.month == 'มกราคม') {
      this.month = 'ธันวาคม'
      this.intMonth = 12;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กุมภาพันธ์') {
      this.month = 'มกราคม'
      this.intMonth = 1;
      this.textShow = this.month + " " + this.intYear
      this.intYear = this.intYear - 1
    }
    else if (this.month == 'มีนาคม') {
      this.month = 'กุมภาพันธ์'
      this.intMonth = 2;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'เมษายน') {
      this.month = 'มีนาคม'
      this.intMonth = 3;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'พฤษภาคม') {
      this.month = 'เมษายน'
      this.intMonth = 4;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'มิถุนายน') {
      this.month = 'พฤษภาคม'
      this.intMonth = 5;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กรกฎาคม') {
      this.month = 'มิถุนายน'
      this.intMonth = 6;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'สิงหาคม') {
      this.month = 'กรกฎาคม'
      this.intMonth = 7;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'กันยายน') {
      this.month = 'สิงหาคม'
      this.all = '8';
      this.finish = '8';
      this.intMonth = 8;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'ตุลาคม') {
      this.month = 'กันยายน'
      this.all = '9';
      this.finish = '9';
      this.intMonth = 9;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'พฤศจิกายน') {
      this.month = 'ตุลาคม'
      this.all = '10';
      this.finish = '10';
      this.intMonth = 10;
      this.textShow = this.month + " " + this.intYear
    }
    else if (this.month == 'ธันวาคม') {
      this.month = 'พฤศจิกายน'
      this.intMonth = 11;
      this.textShow = this.month + " " + this.intYear
    }

    //#endregion
    console.log(this.intMonth)
    console.log(this.intYear)

    this.job.empID = "01225f87-e6cc-4725-afe2-7e5a63f9a183";
    this.job.month = 8;
    this.job.year = 2019;


    this.postDataService.postListpm(this.job).then(work => {
      this.listpm = work;

      for (let i = 0; i < this.listpm.length; i++) {
        this.listpm[i].customerdata = JSON.parse(this.listpm[i].customerdata);
      }

      console.log('listback',this.listpm);
    });
  }

  //#endregion


}
