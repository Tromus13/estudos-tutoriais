import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }

  urlEncoded = '/Test.text';
  getText(){
    return this.http.get(this.urlEncoded, {responseType: 'text'});
  }
}
