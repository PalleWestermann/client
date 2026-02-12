import { Component, inject } from '@angular/core';
import { PersonStore } from './person.store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonModel } from './person.model';

@Component({
  selector: 'app-person',
  imports: [ReactiveFormsModule],
  providers: [PersonStore],
  templateUrl: './person.html',
  styleUrl: './person.css',
})
export class Person {
  private readonly personStore = inject(PersonStore)

  people = this.personStore.people;
  loading = this.personStore.loading;
  error = this.personStore.error;

  private readonly fb = inject(FormBuilder);

  personForm = this.fb.group({
    id:[0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  get f() {
    return this.personForm.controls;
  }

  onSubmit() {
    const person = this.personForm.value as PersonModel;

    if (person.id == 0){
      console.log("added");
      this.personStore.addPerson(person);
    }
    else {
      console.log("updated");
      this.personStore.updatePerson(person);
    }

    this.onReset();

  }

  onReset() {
    this.personForm.reset();
    this.personForm.patchValue({
      id: 0,
      firstName: '',
      lastName: ''
    });
  }

  onEdit(person:PersonModel) {
    this.personForm.patchValue(person);
  }

  onDelete(person:PersonModel) {
    if (confirm(`Are you sure you want to delete person : ${person.firstName} ${person.lastName}`)) {
      this.personStore.deletePerson(person.id);
    }
  }
}
