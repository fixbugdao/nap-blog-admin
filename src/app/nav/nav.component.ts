import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  brand = '{NAP}';
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

}
