import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MasterService } from 'src/shared/master.service';
import { DyanmicMeta } from '../../shared/dynamic-meta.service';
@Component({
  selector: 'app-imagecomponent',
  templateUrl: './imagecomponent.component.html',
  styleUrls: ['./imagecomponent.component.css']
})
export class ImagecomponentComponent implements OnInit {
  imageTitle: any;
  filteredReq: string;
  environment = environment;
  constructor(private activatedRoute: ActivatedRoute, private dynamicMeta: DyanmicMeta,
              private masterService: MasterService) {
    this.imageTitle = masterService.featurePost;
  }

  ngOnInit(): void {
    const filtered = this.imageTitle.filter((title) => {
      return title.title === this.activatedRoute.snapshot.params.text;
    });
    // console.log(environment.hostedURL + 'assets/images/features/' + filtered[0]?.imagename);
    this.filteredReq = environment.hostedURL + 'assets/images/features/' + filtered[0]?.imagename;
    // this.dynamicMeta.updateTitle('What Is Luts');
    this.dynamicMeta.updateOgImage(environment.hostedURL + 'assets/images/features/' + filtered[0]?.imagename, environment.hostedURL + 'share/' + this.activatedRoute.snapshot.params.text);
    // this.dynamicMeta.updateOgUrl(environment.hostedURL + 'share/' + this.activatedRoute.snapshot.params.text);
    // this.dynamicMeta.updateDescription('What Is Luts');
  }

}
