import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnChanges {

  @Input()
  selectedLanguage;

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
  }

  ngOnChanges(): void {
    this.translateService.use(this.selectedLanguage.code);
  }

  ngOnInit(): void {
  }

}
