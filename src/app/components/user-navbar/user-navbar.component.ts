import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SessionService} from '../../services/session.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1300))
    ])
  ]
})
export class UserNavbarComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit() {
  }

  logout(): void {
    this.sessionService.removeSession();
    this.toastrService.success('Zostałeś wylogowany pomyślnie!', 'Autoryzacja');
    this.router.navigate(['/home']);
  }
}
