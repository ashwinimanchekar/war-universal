import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $('.navbar-toggle').click(() => {
        $('header .collapse').toggleClass('show');
      });
      $('.navbar-default .navbar-nav>li>a').click(() => {
        $('header .collapse').toggleClass('show');
      });
    }
  }

  /**
   * This method navigatr o homepage
   */
  homepage(): any {
    const body = $('html, body');
    body.stop().animate({scrollTop: 0 }, 500, 'swing');
    console.log(this.router);
    if (this.router.url === '/chemist-locator' || this.router.url === '/washroomfinder' || this.router.url === '/share/know-more-about-prostate' || this.router.url === '/test-your-bph') {
      this.router.navigateByUrl('/');
    }
  }

  testNavigate(): any {
    // href="#testyourbph"
    // const body = $('html, body');
    // body.stop().animate({scrollTop: 0 }, 500, 'swing');
    console.log(this.router.url);
    if (this.router.url === '/test-your-bph') {
      this.router.navigateByUrl('/#testyourbph');
      const element = document.getElementById('testyourbph');
      element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    } else {
      this.router.navigateByUrl('/#testyourbph');
      const element = document.getElementById('testyourbph');
      element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
      window.scrollTo(window.scrollX, document.getElementById('testyourbph').offsetTop - 100);
    }
  }

  get isAddBph(): boolean { return this.router.url.indexOf('addbph') > -1; }

}
