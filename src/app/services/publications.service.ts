import { Injectable } from '@angular/core';
import {Publication} from '../models/publication';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  publications: Publication[] = [];

  constructor() { }

  getPublications(): Observable<Publication[]> {
    return of(this.publications);
  }

  addPublications(publication: Publication) {
    this.publications.push(publication);
  }

}
