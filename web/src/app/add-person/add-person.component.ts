import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/services/service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  data: any;
  isIntoData: boolean;
  listPerson: any;
  isCreatePerson: boolean;
  constructor(private service: PersonService, public router: Router) {
    this.data = {
      name: '',
      name_mother: '',
      name_father: '',
    };
    this.isIntoData = false;
    this.isCreatePerson = false;
    this.listPerson = {
      id: 0,
      nombre: '',
      madre: null,
      padre: null,
    };
  }

  ngOnInit(): void {}
  goBack(): void {
    this.router.navigate(['']);
  }
  isChange(): void {
    this.isIntoData = false;
    this.isCreatePerson = false;
    if (
      this.data.name !== '' &&
      this.data.name_mother !== '' &&
      this.data.name_father !== ''
    ) {
      this.isIntoData = true;
    }
  }
  addPerson() {
    this.service.addPerson(this.data).subscribe((response) => {
      this.listPerson = response;
      this.isCreatePerson = true;
    });
  }
}
