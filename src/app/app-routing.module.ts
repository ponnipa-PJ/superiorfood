import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../app/auth/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './page/menu/menu.module#MenuPageModule',canActivate:[AuthGuardGuard] },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'job/jobdetail', loadChildren: './page/job/jobdetail/jobdetail.module#JobdetailPageModule' },
  { path: 'job/reportcheckpm', loadChildren: './page/job/reportcheckpm/reportcheckpm.module#ReportcheckpmPageModule' },
  { path: 'job/calendarpm', loadChildren: './page/job/calendarpm/calendarpm.module#CalendarpmPageModule' },
  { path: 'joball/listpm', loadChildren: './page/joball/listpm/listpm.module#ListpmPageModule' },
  { path: 'joball/listpm/detaillistpm', loadChildren: './page/joball/detaillistpm/detaillistpm.module#DetaillistpmPageModule' },
  // tslint:disable-next-line: max-line-length
  { path: 'joball/listpm/detailofdetaillistpm', loadChildren: './page/joball/detailofdetaillistpm/detailofdetaillistpm.module#DetailofdetaillistpmPageModule' },
  { path: 'signature', loadChildren: './page/joball/detailofdetaillistpm/signature/signature.module#SignaturePageModule' },
  { path: 'take-spare-parts', loadChildren: './page/take-spare-parts/take-spare-parts.module#TakeSparePartsPageModule' },
  { path: 'sqlite', loadChildren: './sqlite/sqlite.module#SqlitePageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'job/install', loadChildren: './page/job/install/install.module#InstallPageModule' },
  { path: 'job/uninstall', loadChildren: './page/job/uninstall/uninstall.module#UninstallPageModule' },
  { path: 'job/cm', loadChildren: './page/job/cm/cm.module#CmPageModule' },
  { path: 'customerpassword', loadChildren: './page/joball/detailofdetaillistpm/customerpassword/customerpassword.module#CustomerpasswordPageModule' },
  { path: 'checklist', loadChildren: './page/joball/detailofdetaillistpm/checklist/checklist.module#ChecklistPageModule' },
  { path: 'checkevaluation', loadChildren: './page/joball/detailofdetaillistpm/checkevaluation/checkevaluation.module#CheckevaluationPageModule' },
  { path: 'checklistcm', loadChildren: './page/joball/detailofdetaillistpm/checklistcm/checklistcm.module#ChecklistcmPageModule' },
  { path: 'modalpop', loadChildren: './page/overview/modalpop/modalpop.module#ModalpopPageModule' },
  { path: 'showimginstall', loadChildren: './page/job/showimginstall/showimginstall.module#ShowimginstallPageModule' },
  { path: 'customerevaluation', loadChildren: './page/joball/detailofdetaillistpm/customerevaluation/customerevaluation.module#CustomerevaluationPageModule' },
  { path: 'take', loadChildren: './page/take-spare-parts/take/take.module#TakePageModule' },
  { path: 'sparelist', loadChildren: './page/take-spare-parts/sparelist/sparelist.module#SparelistPageModule' },
  { path: 'take-new', loadChildren: './page/take-spare-parts/take-new/take-new.module#TakeNewPageModule' },
  { path: 'changsparepart', loadChildren: './page/joball/detailofdetaillistpm/changsparepart/changsparepart.module#ChangsparepartPageModule' },
  { path: 'changpassword', loadChildren: './page/setting/changpassword/changpassword.module#ChangpasswordPageModule' },
  { path: 'sparepart', loadChildren: './page/sparepart/sparepart.module#SparepartPageModule' },
  { path: 'waitspare', loadChildren: './page/take-spare-parts/waitspare/waitspare.module#WaitsparePageModule' },  { path: 'parts-waiting-list', loadChildren: './page/sparepart/parts-waiting-list/parts-waiting-list.module#PartsWaitingListPageModule' },
  { path: 'iceimg', loadChildren: './page/detaillistpm/iceimg/iceimg.module#IceimgPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
