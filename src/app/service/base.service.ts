import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  urlServidor: string = 'https://rickandmortyapi.com/api';

  endPoint: string = '';

  constructor(private http: HttpClient) { }

  setEndPoint(rutafinal: string) {
    this.endPoint = rutafinal;
  }

  handlerError({ status }: any) {
    // res.sendstatus(404) --> devuelve el objeto del error
    if (status === 404) {
      // not found
      location.href = 'http://http.cat/' + status
    } else if (status === 500) {
      // internal server error
    } else if (status === 401) {
      // internal server error
    }
  }

  async get() {
    try {
      return await this.http.get(`${this.urlServidor}/${this.endPoint}`).toPromise();
    } catch (error) {
      return this.handlerError(error);
    }
  }
}
