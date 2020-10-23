import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { MasterService } from '../../shared/master.service';
import { environment } from '../../environments/environment';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  imageTitle: any;
  environment = environment;
  facebookUrl = environment.facebookShare;
  whatsappUrl = environment.whatsappShare;
  hostedURL = environment.hostedURL;
  @ViewChild('bphspecialist', { static: true }) bphspecialist: ElementRef;
  bphSpecialistList: Array<[]>;
  constructor(private masterService: MasterService, @Inject(PLATFORM_ID) private platformId: any) {
    this.bphspecialist = null;
    this.imageTitle = masterService.featurePost;
  }

  /**
   * This method featch the bph specialist
   */
  // tslint:disable-next-line:typedef
  fetchBphSpecilist(){
    const requestBody = {
      param: this.bphspecialist
    };
    this.masterService.postCall('get-bph-specialist', requestBody).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error => {
        console.log(error);
      }));
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $('.navbar  a[href^="#"]').on('click', (e) => {
        $('.navbar a').each(() => {
               $(this).removeClass('active');
        });
        $(this).addClass('active');
        const target = e.target.hash;
        const $target = $(target);
        $('html, body').stop().animate({
          scrollTop: $target.offset().top - 100
        }, 700, 'swing', () => {
            window.location.hash = target;
        });
       });
      $(document).ready((jQuery) => {
        const topMenu = jQuery('#top-menu');
        const offset = 150;
        const topMenuHeight = topMenu.outerHeight() + offset;
        const menuItems =  topMenu.find('a[href*="#"]');
        const scrollItems = menuItems.map(() => {
            const href = jQuery(this).attr('href');
            const id = href.substring(href.indexOf('#'));
            const item = jQuery(id);
            if (item.length) { return item; }
        });
        // so we can get a fancy scroll animation
        menuItems.click((e) => {
          const href = jQuery(this).attr('href');
          const id = href.substring(href.indexOf('#'));
          const offsetTop = href === '#' ? 0 : jQuery(id).offset().top - topMenuHeight + 1;
          $('html, body').stop().animate({
                scrollTop: offsetTop
          }, 300);
          e.preventDefault();
        });
          // Bind to scroll
        $(window).scroll(() => {
             // Get container scroll position
          const fromTop = $(this).scrollTop() + topMenuHeight;
             // Get id of current scroll item
          let cur = scrollItems.map(() => {
            if ($(this).offset().top < fromTop) {
              return this;
            }
          });
             // Get the id of the current element
          cur = cur[cur.length - 1];
          const id = cur && cur.length ? cur[0].id : '';
          menuItems.parent().removeClass('active');
          if (id){
            console.log('hello');
            $('.navbar a').removeClass('active');
            menuItems.parent().end().filter('[href*=\'#' + id + '\']').parent().addClass('active');
          }
        });
      });
      $(window).scroll( () => {
        if ($(window).scrollTop() > 70){
            if (!$('.navbar').hasClass('fixed')){
                $('.navbar').stop().addClass('fixed').css('top', '-100px').animate({ top: '0px' }, 750);
                $('.navbar').addClass('shadow');
            }
        }else {
            $('.navbar').removeClass('fixed');
            $('.navbar').removeClass('shadow');
        }
      });
      $(window).resize();
    }
  }

  ngOnInit(): void {
    // fromEvent(this.bphspecialist.nativeElement, 'keyup').pipe(
    //   map((event: any) => {
    //     return event.target.value;
    //   }), filter(res => res.length > 2), debounceTime(1000)
    //   , distinctUntilChanged()
    // ).subscribe((text: string) => {
    //   this.masterService.postCall('get-bph-specialist', {param: text}).subscribe((res) => {
    //     this.bphSpecialistList = res.data;
    //   }, (err) => {
    //     console.log('error', err);
    //   });

    // });
  }

}
