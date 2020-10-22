import {Injectable} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({providedIn: 'root'})

export class DyanmicMeta {
  constructor(private title: Title, private meta: Meta) { }


  updateTitle(title: string): any {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string): any {
    this.meta.addTag({ name: 'og:url', content: url });
  }

  updateOgImage(url: string, ogurl): any {
    // <meta property="og:type" content="website">
    // <meta property="og:url" content="https://whatarelief.in/bph/know-more-about-prostate">
    // <meta property="og:title" content="know More About Prostate">
    // <meta property="og:description" content="">
    // <meta property="og:image" content="https://whatarelief.in/assets/mb2.jpg">
    this.meta.addTag( { property: 'og:type', content: 'website' } );
    this.meta.addTag({ name: 'og:url', content: ogurl });
    this.meta.addTag( { property: 'og:title', content: 'What Is Luts' } );
    this.meta.addTag( { property: 'og:description', content: 'What Is Luts' } );
    this.meta.addTag( { property: 'og:image', content: url } );
  }

  updateDescription(desc: string): any {
    this.meta.addTag({ name: 'description', content: desc });
  }
}
