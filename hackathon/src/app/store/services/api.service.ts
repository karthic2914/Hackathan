import { JwtService } from './jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private jwtService: JwtService, private http: HttpClient) {
  }

  private setHeader() {
    const config = {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    };
    if (this.jwtService.getToken()) {
      config['Authorization'] = this.jwtService.getToken();
    }
    return new HttpHeaders(config);
  }

  post(relativePath: string, body: Object = {}): Promise<any> {
    const url = `${environment.BASE_URL + relativePath}`;
    return this.http.post(url, body, {headers: this.setHeader()}).toPromise().then((response: any) => {
      return response;
    });
  }

  get(relativePath: string): Promise<any> {
    const url = `${environment.BASE_URL + relativePath}`;
    return this.http.get(url, {headers: this.setHeader()}).toPromise().then((response: any) => {
      return response;
    });
  }
}
