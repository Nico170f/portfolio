import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

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

  scrollTo(target: 'footer-section' | 'recent-section' | 'top-section') {
    const elm: HTMLDivElement | null = document.getElementById(target) as HTMLDivElement;
    if (!elm) return;

    elm.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
