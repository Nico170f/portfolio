import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {

  constructor(
    public router: Router,
  ) { }

  navigateTo(url: string[]): void {
    this.router.navigate(url);
    window.scrollTo(0, 0);
  }

}
