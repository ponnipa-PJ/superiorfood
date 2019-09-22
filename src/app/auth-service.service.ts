import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }

  getJob() {
    return this.http.get(
      'http://superior.wingplusweb.com/API/ServicePlans.ashx'
    );
  }
  getJobDetail() {
    return this.http.get(
      'http://superior.wingplusweb.com/API/ServicePlansDetail.ashx'
    );
  }
  getJobAll() {
    return this.http.get(
      'http://superior.wingplusweb.com/API/Employee.ashx'
    );
  }
  getTest() {
    return this.http.get(
      'http://stock.wingplusapp.com/DataService.ashx'
    );
  }
  getuser(email, password){
    return this.http.get(
      'http://superior.wingplusweb.com/API/Login.ashx?username=' + email + '&password=' + password
    );
}
// getJobOverview(empid, month,year){
//   return this.http.get(
//     'http://superior.wingplusweb.com/API/JobOverview.ashx' + '?empID=' + empid + '&month=' + month + '&year=' + year
//   );
// }
}
