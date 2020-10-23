import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
const apiEndPoint = environment.baseURL;

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  featurePost = [{
    imagename: 'mb1.jpg',
    title: 'What is Luts'
  }, {
    imagename: 'mb2.jpg',
    title: 'know-more-about-prostate'
  }, {
    imagename: 'mb6.jpg',
    title: 'understanding-bph'
  }, {
    imagename: 'mb4.jpg',
    title: 'symptoms-of-bph'
  }, {
    imagename: 'mb5.jpg',
    title: 'bph-prevalence'
  }, {
    imagename: 'mb3.jpg',
    title: 'prostate-health-and-bph-facts'
  }, {
    imagename: 'mb7.jpg',
    title: 'dos-and-donts-of-bph'
  }, {
    imagename: 'mb8.jpg',
    title: 'lifestyle-modification-in-bph'
  }];
  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private router: Router) { }

  /**
   * This method will execute the get method api and will return response
   */
  getData(apiurl: string, filter?: object): Observable<any> {
    const param = filter ? this.convertParam('get', filter) : '';
    return this.http.get<any>(apiEndPoint + '/' + apiurl + param).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      }));
  }

  /**
   * This method return data as query string if method is get
   * @param method string
   * @param data object
   */
  convertParam(method: string = 'post', data: object = {}): any {
    if (method === 'post') {
      return data;
    } else {
      return typeof data === 'string' ? '?' + data : '?' + Object.keys(data).map(
        (k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      ).join('&');
    }
  }

  /**
   * This method will execute the post method api and will return response
   */
  postCall(apiurl: string, filter: object): Observable<any> {
    const param = this.convertParam('post', filter);
    return this.http.post<any>(apiEndPoint + '/' + apiurl, param).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error);
      }));
  }

  /**
   * This method will execute the get method api and will return response
   */
  getFile(apiurl: string): Observable<ArrayBuffer> {
    return this.http.get(apiEndPoint + '/' + apiurl, { responseType: 'arraybuffer' });
  }

}
