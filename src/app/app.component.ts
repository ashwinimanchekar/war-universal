import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-universal-example';
  loaded = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any, private ngxService: NgxUiLoaderService, private router: Router) {
    this.ngxService.start();
    if (isPlatformBrowser(this.platformId)) {
      this.ngxService.stop();
    }
  }

  ngOnInit(): any {
    this.router.events.subscribe(value => {
      if (this.router.url.toString() === '/#testyourbph') {
         setTimeout(() => {
          const element = document.getElementById('testyourbph');
          element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
          window.scrollTo(window.scrollX, document.getElementById('testyourbph').offsetTop - 100);
         }, 100);
      }
    });
  }


}
