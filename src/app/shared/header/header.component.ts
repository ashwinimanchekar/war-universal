import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
      $('.navbar-toggle').click(() => {
        $('header .collapse').toggleClass('show');
      });
      $('.navbar-default .navbar-nav>li>a').click(() => {
        $('header .collapse').toggleClass('show');
      });
  }

  /**
   * This method navigatr o homepage
   */
  homepage(): any {
    const body = $('html, body');
    body.stop().animate({scrollTop: 0 }, 500, 'swing');
    console.log(this.router);
    if (this.router.url === '/chemist-locator' || this.router.url === '/washroomfinder') {
      this.router.navigateByUrl('/');
    }
  }

  get isAddBph(): boolean { return this.router.url.indexOf('addbph') > -1; }

}
