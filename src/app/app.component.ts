import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-universal-example';
  loaded = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any, private ngxService: NgxUiLoaderService) {
    this.ngxService.start();
    if (isPlatformBrowser(this.platformId)) {
      this.ngxService.stop();
    }
  }
}
