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
    console.log(person);

  }

  onReset() {
    this.personForm.reset();
  }
}
