import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/services/service';

@Component({
  selector: 'app-one-person',
  templateUrl: './one-person.component.html',
  styleUrls: ['./one-person.component.scss'],
})
export class OnePersonComponent implements OnInit {
  listPerson: any;
  isConsult: boolean;
  name: string;
  isIntoData: boolean;
  constructor(private service: PersonService, public router: Router) {
    this.listPerson = [];
    this.isConsult = false;
    this.name = '';
    this.isIntoData = false;
  }

  ngOnInit(): void {}

  isChange(): void {
    this.isIntoData = false;
    if (this.name !== '') {
      this.isIntoData = true;
    }
  }
  getOnePerson(): void {
    this.service.getOnePerson(this.name).subscribe((response) => {
      this.listPerson = response;
    });
  }
  goBack(): void {
    this.router.navigate(['']);
  }
}
