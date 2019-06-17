import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionService} from '../../services/session.service';
import {PublicationsService} from '../../services/publications.service';
import {Publication} from '../../models/publication';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1300))
    ])
  ]
})
export class BrowserComponent implements OnInit {

  publications: Publication[] = [];
  mockPublication: Publication;

  constructor(private sessionService: SessionService, private publicationService: PublicationsService) {
  }

  ngOnInit() {
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications()
      .subscribe(publications => this.publications = publications);
  }

}
