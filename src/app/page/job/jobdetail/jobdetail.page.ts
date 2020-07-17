import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../auth-service.service';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../storage.service';
import { PostDataService } from '../../../post-data.service';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ChecklistPage } from '../../joball/detailofdetaillistpm/checklist/checklist.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.page.html',
  styleUrls: ['./jobdetail.page.scss'],
})
export class JobdetailPage implements OnInit {

  //#region data
  data: any;
  json: any;
  items: any;
  question: any;
  answer: any;
  answerText: any;
  json_checklist = {
    header: '',
    subheader: '',
    row: ''
  }
  jobdetail;
  cusID;
  result;
  query;
  planID;
  tranID;
  insID;
  newinsID
  image;
  type;
  typeeng;
  isShowImage = true;
  url: SafeResourceUrl;
  sanitizer: DomSanitizer;
  img;
  empID;
  installnew;
  ShowList = true;
  typethai;
  ShowCM = false;
  HideCM = true;
  booimg1 = false;
  booimg2 = false;
  booimg3 = false;
  booimg4 = false;
  booimg5 = false;
  booimg6 = false;
  booimg7 = false;
  booimg8 = false;
  booimg9 = false;
  booimg10 = false;
  booimg11 = false;
  booimg12 = false;
  booimg13 = false;
  isShowImage1 = false;
  isShowImage2 = false;
  isShowImage3 = false;
  isShowImage4 = false;
  isShowImage5 = false;
  isShowImage6 = false;
  isShowImage7 = false;
  isShowImage8 = false;
  isShowImage9 = false;
  isShowImage10 = false;
  isShowImage11 = false;
  isShowImage12 = false;
  isShowImage13 = false;
  shows;
  isdevice = false;
  isspare = false;
  devices;
  spares;
  typeChang;
  //#endregion

  //#region constructor
  constructor(public DataService: AuthServiceService,
    private route: ActivatedRoute,
    sanitizer: DomSanitizer,
    private storageService: StorageService,
    public modalController: ModalController,
    private postDataService: PostDataService) {
    this.jobdetail = [];
    this.img = [];
    this.route.queryParams.subscribe(params => {
      this.query = JSON.parse(params["data"]);
      this.data = this.query.data
      this.insID = this.query.installID
      this.newinsID = this.query.newinstallID
      this.tranID = this.query.tranID
      this.type = this.query.type
      this.planID = this.query.planID
      console.log("query", this.query);
    });

    this.storageService.getUser().then(items => {
      this.items = items;
      // console.log(items);      
      for (let i = 0; i < this.items.length; i++) {
        this.empID = this.items[i].empID;
        console.log(this.planID);
        console.log(this.insID);

        console.log(this.empID);
      }
      this.postDataService.apiServer_url

      this.url = sanitizer.bypassSecurityTrustResourceUrl(this.postDataService.apiServer_url + 'Web/CK_CheckInfo.aspx' + '?empID=' + this.empID + '&serviceplanid=' + this.planID + '&installplanid=' + this.insID);
    });
  }
  //#endregion

  //#region start
  ngOnInit() {
    if (this.type == "INSTALL") {
      this.typethai = "งานติดตั้ง"
      this.typeeng = 'Install'
      console.log(this.typethai);
    }
    else if (this.type == "CM") {
      this.typethai = "งานซ่อม"
      this.typeeng = 'TK'
      this.checkcm();
    }
    else if (this.type == "PM") {
      this.typethai = "งานตรวจเช็ค"
      this.typeeng = 'PM'
    }
    else if (this.type == "UNINSTALL") {
      this.typethai = "งานถอนการติดตั้ง"
      this.typeeng = 'Uninstall'
    }
    if (this.type != "PM") {
      this.ShowList = false;
    }
    if (this.type == "CM") {
      this.jobdetail.insID = this.newinsID;
    } else {
      this.jobdetail.insID = this.insID;
    }
    this.jobdetail.planID = this.planID;
    this.jobdetail.tranID = this.tranID;
    this.jobdetail.type = this.type

    console.log(this.jobdetail);

    this.postDataService.postjobDetail(this.jobdetail).then(jobdetail => {
      this.result = jobdetail;
      console.log(this.result)
      for (let i = 0; i < this.result.length; i++) {
        this.image = JSON.parse(this.result[i].image);
      }
      console.log(this.image);

      for (let v = 0; v < this.image.length; v++) {
        if (this.image[v].type == "step1_pic1") {
          this.img.src1 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg1 = true;
          console.log("1", this.img.src1);
        }
        if (this.image[v].type == "step1_pic2") {
          this.img.src2 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg2 = true;
          console.log("2", this.img.src2);
        }
        if (this.image[v].type == "step1_pic3") {
          this.img.src3 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg3 = true;
          console.log("3", this.img.src3);
        }
        if (this.image[v].type == "step1_pic4") {
          this.img.src4 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg4 = true;
          console.log("4", this.img.src4);
        }
        if (this.image[v].type == "step1_pic5") {
          this.img.src5 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg5 = true;
          console.log("5", this.img.src5);
        }
        if (this.image[v].type == "step1_pic6") {
          this.img.src6 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg6 = true;
          console.log("6", this.img.src6);
        }
        if (this.image[v].type == "step1_pic7") {
          this.img.src7 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg7 = true;
          console.log("7", this.img.src7);
        }
        if (this.image[v].type == "step1_pic8") {
          this.img.src8 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg8 = true;
          console.log("8", this.img.src8);
        }
        if (this.image[v].type == "step3_pic1") {
          this.img.src9 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg9 = true;
          console.log("9", this.img.src9);
        }
        if (this.image[v].type == "step3_pic2") {
          this.img.src10 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg10 = true;
          console.log("10", this.img.src10);
        }
        if (this.image[v].type == "step3_pic3") {
          this.img.src11 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg11 = true;
          console.log("11", this.img.src11);
        }
        if (this.image[v].type == "step3_pic4") {
          this.img.src12 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg12 = true;
          console.log("12", this.img.src12);
        }
        if (this.image[v].type == "step3_pic5") {
          this.img.src13 = this.postDataService.apiServer_url + this.image[v].file_path
          this.booimg13 = true;
          console.log("13", this.img.src13);
        }
        console.log(this.booimg12);

        console.log(this.booimg13)
      }
      this.isShowImage1 = this.booimg1;
      this.isShowImage2 = this.booimg2;
      this.isShowImage3 = this.booimg3;
      this.isShowImage4 = this.booimg4;
      this.isShowImage5 = this.booimg5;
      this.isShowImage6 = this.booimg6;
      this.isShowImage7 = this.booimg7;
      this.isShowImage8 = this.booimg8;
      this.isShowImage9 = this.booimg9;
      this.isShowImage10 = this.booimg10;
      this.isShowImage11 = this.booimg11;
      this.isShowImage12 = this.booimg12;
      this.isShowImage13 = this.booimg13;
    });
  }
  //#endregion


  checkcm() {
    let param = {
      installID: this.insID,
      typedevice: "CheckCM",
      empID: this.empID,
      planID: this.planID,
    }
    console.log(param);

    this.postDataService.postdevice(param).then(data => {
      this.shows = data
      console.log(this.shows);

      if (this.shows == "device") {
        this.typeChang = "เครื่อง"
        this.showdevice();
      } else if (this.shows == "spare") {
        this.typeChang = "อะไหล่"
        this.showspare();
      }
    });
  }

  showdevice() {
    let param = {
      installID: this.insID,
      typedevice: "GetDeviceTran",
      empID: this.empID,
      planID: this.planID,
    }
    this.postDataService.postdevice(param).then(data => {
      this.devices = data
      this.isdevice = true;
      console.log(this.devices);

    });
  }

  showspare() {
    let param = {
      installID: this.insID,
      typedevice: "GetSpareTran",
      empID: this.empID,
      planID: this.planID,
    }
    this.postDataService.postdevice(param).then(data => {
      this.devices = data
      this.isspare = true;
      console.log(this.spares);
    });
  }

  //#region 
  async editChecklist() {
    const modal = await this.modalController.create({
      component: ChecklistPage,
      cssClass: 'my-custom-modal-css-pm',
      componentProps: {
        empID: this.empID,
        planID: this.planID,
        install: this.insID,
        type: "edit"
      }
    });
    modal.onDidDismiss().then(data => {
    })
    return await modal.present();
  }
  //#endregion

}
