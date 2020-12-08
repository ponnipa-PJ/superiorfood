import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../../post-data.service';
import { StorageService, User } from '../../../storage.service';
import { NavigationExtras } from '@angular/router';
import { NavController, AlertController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sparelist',
  templateUrl: './sparelist.page.html',
  styleUrls: ['./sparelist.page.scss'],
})
export class SparelistPage implements OnInit {
  empID;
  list;
  loads = false;
  constructor(private postDataService: PostDataService,
    private storageService: StorageService, 
    public alertController: AlertController,
    public loadingController: LoadingController,
    public navCtrl: NavController) { 
      setTimeout(() => {
        this.ngOnInit();
      }, 500);
    }

    loadpage() {
      setTimeout(() => {
        this.loaddata();
        this.ngOnInit();
      }, 500);
    }
async loaddata() {
    const loading = await this.loadingController.create({
      message: 'กำลังโหลดข้อมูล...',
      duration: 500,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
  ngOnInit() {
    this.load();
  }

  load() {
    this.storageService.getUser().then(items => {
      for (let i = 0; i < items.length; i++) {
        this.empID = items[i].empID;
      }

      let params =
      {
        EmpID: this.empID,
        Type: "List",
      }
      this.postDataService.PostCus(params).then(list => {
        this.list = list
        console.log(list);
        if (this.list == []) {
          this.loads = false;
        }else{
          this.loads = true;
        }
      });
    });
  }
  Detail(item){
    console.log(item);
    
    let params = {
      JobID: item.JobID,
      type: "edit",
      CusID: item.CustomerID,
      item: item
    }
    console.log(params);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };
    console.log(navigationExtras);
    this.navCtrl.navigateForward(['take-spare-parts'], navigationExtras);
  }
  NewSpare(){
    let params = {
      type: "new"
    }
    console.log(params);

    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(params)
      }
    };
    console.log(navigationExtras);
    this.navCtrl.navigateForward(['take-spare-parts'], navigationExtras);
  }
  async Delete(item) {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน!',
      message: 'ต้องการลบข้อมูล',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            let params = {
              JobID: item.JobID,
              EmpID: this.empID,
              Type: "DeleteJob",
            }
            this.postDataService.PostCus(params).then(list => {
              console.log(list);
              this.ngOnInit();
            });
          }
        }, {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }
      ]
    });
    await alert.present();
  }
}

