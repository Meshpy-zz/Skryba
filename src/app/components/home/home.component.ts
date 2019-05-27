import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0
        })
      ),
      transition('void <=> *', animate(1300))
    ])
  ]
})
export class HomeComponent implements OnInit {
  adminUser: User;
  test: string;
  spinner: MatProgressSpinner;
  isVisible: boolean;

  constructor(private router: Router, private toastrService: ToastrService) {
    this.adminUser = new User('admin@admin.pl', 'admin');
    this.isVisible = false;
  }

  ngOnInit() {}

  loginUser(emailInput, passwordInput): void {
    if (
      emailInput.value === this.adminUser.email &&
      passwordInput.value === this.adminUser.password
    ) {
      this.startLoadingSpinner();
    } else {
      this.toastrService.error('Podałeś złe dane autoryzacyjne!', 'Błąd!');
    }
  }

  startLoadingSpinner() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
      this.router.navigate(['/main']);
    }, 2000);
  }
}
