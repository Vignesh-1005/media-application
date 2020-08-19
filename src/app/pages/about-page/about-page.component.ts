import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit, OnChanges {

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
