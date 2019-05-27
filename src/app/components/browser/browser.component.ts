import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionService} from '../../services/session.service';

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

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
