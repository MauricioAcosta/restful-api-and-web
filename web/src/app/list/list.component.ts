import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/services/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listPerson: any;
  constructor(private service: PersonService, public router: Router) {
    this.listPerson = [];
  }

  ngOnInit(): void {
    this.service.getAllPerson().subscribe((response) => {
      this.listPerson = response;
    });
  }
  goBack() {
    this.router.navigate(['']);
  }
}
