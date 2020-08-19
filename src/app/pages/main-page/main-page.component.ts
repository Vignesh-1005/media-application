import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import * as usersDB from '../../../assets/UsersDB/usersDatabase.json';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [ConfirmationService]
})
export class MainPageComponent implements OnInit {

  logStatus: string;
  displaySignin = false;
  userName: string;
  userKey: string;
  userPassword: any;
  alertFlag: boolean;
  showHome: boolean;
  showGallery: boolean;
  showAbout: boolean;
  selectedLanguage: any;
  initialLang = 'English';
  countries: any[];

  constructor( private confirmationService: ConfirmationService,
               private translateService: TranslateService ) {
      this.translateService.setDefaultLang('en');

      this.countries = [
        {name: 'English', code: 'en'},
        {name: 'French', code: 'fr'},
    ];
    }

  ngOnInit(): void {
    this.logStatus = 'Login';
    this.showHome = true;
    this.showGallery = false;
    this.showAbout = false;
    localStorage.clear();
  }

  showSigninDialog() {
    localStorage.getItem('userName') != null ? this.confirmLogout() :
    this.displaySignin = true;
  }

  closeSigninDialog() {
    this.displaySignin = false;
    this.alertFlag = false;
    this.userName = '';
    this.userPassword = '';
  }

  alertSigninDialog() {
    this.alertFlag = true;
    this.userName = '';
    this.userPassword = '';
  }

  confirmLogout() {
    this.confirmationService.confirm({
      message: 'Do you want to Sign out?',
      header: 'Logout Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        localStorage.clear();
        this.logStatus = 'Login';
        this.showHomePage();
      },
      reject: () => {
        console.log('Rejected');
      }
  });
  }

  // Performs login function
  validateCredential() {
    const userId = this.userName;
    const signinPassword = this.userPassword;
    const data = (usersDB as any).default;

    for (const userdb of data.usersDB) {
      if (userdb.userid === userId && userdb.password === signinPassword) {
        localStorage.setItem('userName', userdb.username);
        this.logStatus = 'Logout';
        break;
      }
    }
    this.logStatus === 'Login' ? this.alertSigninDialog() : this.closeSigninDialog();
    this.userKey = localStorage.getItem('userName');
  }

  showAboutUs() {
    this.showHome = false;
    this.showGallery = false;
    this.showAbout = true;
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // For setting Language
  setLanguage() {
    this.translateService.use(this.selectedLanguage.code);
  }

  showHomePage() {
    this.showHome = true;
    this.showGallery = false;
    this.showAbout = false;
  }

  showGalleryPage() {
    this.showHome = false;
    this.showGallery = true;
    this.showAbout = false;
  }

}
