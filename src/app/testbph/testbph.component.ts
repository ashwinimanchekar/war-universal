import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const $: any;
import { ElementRef , ViewChild} from '@angular/core';
import { MasterService } from '../../shared/master.service';
import { saveAs } from 'file-saver';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-testbph',
  templateUrl: './testbph.component.html',
  styleUrls: ['./testbph.component.css']
})
export class TestbphComponent implements OnInit {
  submittedId: any;
  // tslint:disable-next-line:ban-types
  isNaN: Function = Number.isNaN;
  questionaiesVal: any;
  @ViewChild('pdfTable') pdfTable: ElementRef;
  lifeIndex = ['Delighted', 'Pleased', 'Mostly satisfied', 'Mixed', 'Mostly Disatisfied', 'Unhappy', 'Terrible'];
  form: FormGroup;
  scorepercentage: any;
  qualityLifeForm: FormGroup;
  submitAttempt: boolean;
  totalScore: number;
  qualityOfLiftIndex: string;
  constructor(private fb: FormBuilder, private masterService: MasterService,
              @Inject(PLATFORM_ID) private platformId: any) {
    this.form = fb.group({
      sensation: ['', Validators.required],
      urinate_again: ['', Validators.required],
      stopped_started: ['', Validators.required],
      weak_stream: ['', Validators.required],
      defer_urination: ['', Validators.required],
      push_strain: ['', Validators.required],
      pash_urine: ['', Validators.required]
    });
    this.qualityLifeForm = fb.group({
      indexValue: ['', Validators.required]
    });
    this.submitAttempt = false;
  }

  get qualityInNumber(): number {
    return parseFloat(this.qualityOfLiftIndex);
  }

  get getBPHSymptom(): string {
    if (this.totalScore <= 7) {
      return 'Mild';
    }
    if (this.totalScore > 7 && this.totalScore <= 19) {
      return 'Moderate';
    }
    if (this.totalScore > 20 && this.totalScore <= 35) {
      return 'Severe';
    }
  }

  /**
   * This method is emitted by quality of live input
   */
  checkSumit(): any {
    setTimeout(() => {
      const formVal = this.form.value;
      this.questionaiesVal = [formVal.sensation, formVal.urinate_again, formVal.stopped_started, formVal.weak_stream,
        formVal.defer_urination, formVal.push_strain, formVal.pash_urine];
      if (this.totalScore && this.qualityInNumber) {
        const reqData = this.form.value;
        reqData.quakityindex = this.qualityInNumber;
        this.masterService.postCall('submit-test', reqData).subscribe(
          (response: any) => {
            this.submittedId = response.data.insertId;
          },
          (error => {}));
      }
    });
  }

  /**
   * This method handle the submit event
   */
  submit(): void {
    this.submitAttempt = true;
    if (this.form.invalid) {
      setTimeout(() => {
        $('html, body').animate({
              scrollTop: ($('.alert-danger').offset().top - 300)
        }, 2000);
      });
      return;
    }
    const score =  Object.keys(this.form.value).reduce((sum, key) => sum + parseFloat(this.form.value[key] || 0), 0);
    let scoreper;
    if (score <= 7) {
      // if 7 then 60% == 8.7
      // if 6 then 51.42%
      scoreper = (score * 8);
    } else if (score > 7 && score <= 21) {
      // if 19 then 120% = 6.315
      scoreper = (score * 6.3);
    } else  if (score > 21 && score <= 35) {
      const greaterThan = (score - 21);
      scoreper = (greaterThan * 4) + 126;
      // // 22 -126
      // // 23 -
      // // 33 - 175
      // // 34 - 180
      // // 35 - 184
      // scoreper = (score * 5.8);
    }
    this.scorepercentage = scoreper;
    this.totalScore = score;
  }

  get formValue(): any {
    console.log(this.form.value, Object.keys(this.form.value));
    return Object.keys(this.form.value);
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.querySelector('.checkheader');
      el.scrollIntoView({
              behavior: 'auto',
              block: 'center',
              inline: 'center'
      });
    }
  }

  /**
   * This method download html as pdf
   */
  public downloadAsPDF(): any {
    this.masterService.getFile('download-report/' + this.submittedId).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        saveAs(blob, 'report.pdf');
      },
      (error => {}));
  }

}
