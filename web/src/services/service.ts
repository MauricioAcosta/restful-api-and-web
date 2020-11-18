import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/demo';
  }

  /**
   * addPerson
   */
  public addPerson(data: any) {
    return this.httpClient.get(
      this.url +
        '/add?nombre=' +
        data.name +
        '&nombre_madre=' +
        data.name_mother +
        '&nombre_padre=' +
        data.name_father
    );
  }
  /**
   * getAllPerson
   */
  public getAllPerson() {
    return this.httpClient.get(this.url + '/all');
  }
  /**
   * getOnePerson
   */
  public getOnePerson(name: string) {
    return this.httpClient.get(this.url + '/one?nombre=' + name);
  }
}
