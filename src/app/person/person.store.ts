import { inject, Injectable, signal } from "@angular/core";
import { PersonModel } from "./person.model";
import { HttpErrorResponse } from "@angular/common/http";
import { PersonService } from './person.service';

export interface PersonState {
  people: readonly PersonModel[],
  loading: boolean,
  error: HttpErrorResponse | null
}

const _initialState: PersonState = {
  people: [],
  loading: false,
  error: null
}

@Injectable()
export class PersonStore {
  private readonly PersonService = inject(PersonService);
  private state = signal(_initialState);
}
