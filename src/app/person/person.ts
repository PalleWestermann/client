import { Component, inject } from '@angular/core';
import { PersonStore } from './person.store';

@Component({
  selector: 'app-person',
  imports: [],
  providers: [PersonStore],
  templateUrl: './person.html',
  styleUrl: './person.css',
})
export class Person {
  private readonly personStore = inject(PersonStore)

  people = this.personStore.people;
  loading = this.personStore.loading;
  error = this.personStore.error;
}
