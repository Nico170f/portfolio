import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(180, style({ opacity: 1 })),
      ])
    ]),
  ],
})
export class FrontpageComponent {

  showSidenavbutton = true;
  showSidenav = false;

  toggleDrawer() {
    this.showSidenav = !this.showSidenav;

    if (this.showSidenav) {
      this.showSidenavbutton = false;
      return;
    }

    setTimeout(() => {
      this.showSidenavbutton = true;
    }, 200);
  }

}
