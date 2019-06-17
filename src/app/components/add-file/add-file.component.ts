import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionService} from '../../services/session.service';
import {PublicationsService} from '../../services/publications.service';
import {ToastrService} from 'ngx-toastr';
import {Publication} from '../../models/publication';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1300))
    ])
  ]
})
export class AddFileComponent implements OnInit {

  publicationToAdd: string[] = [];
  parsedPublication: Publication;

  constructor(private sessionService: SessionService, private publicationService: PublicationsService, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  validatePublication(value: string) {
    this.publicationToAdd = value.split('-');

    console.log(this.publicationToAdd.length);
    if (this.publicationToAdd.length === 7) {
      this.toastrService.success('Poprawnie zwalidowano dodaną publikacje!', 'Dodano publikację!');
      return true;
    } else {
      return false;
    }
  }

  addPublication(value: string) {
    if (this.validatePublication(value)) {
      this.parsedPublication = new Publication(this.publicationToAdd[0], this.publicationToAdd[1], this.publicationToAdd[2], this.publicationToAdd[3], this.publicationToAdd[4], this.publicationToAdd[5], this.publicationToAdd[6]);
      this.publicationService.addPublications(this.parsedPublication);
    } else {
      this.toastrService.error('Wprowadziłeś dane w niepoprawnym formacie!', 'Błąd!');
    }
  }
}
