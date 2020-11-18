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
