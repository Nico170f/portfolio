import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-footer',
  templateUrl: './navigation-footer.component.html',
  styleUrls: ['./navigation-footer.component.scss']
})
export class NavigationFooterComponent {

  constructor(
    private router: Router
  ) { }

  dimmed = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.footer-nav') as HTMLElement;
    if (window.scrollY > element.clientHeight) {
      this.dimmed = false;
    } else {
      this.dimmed = true;
    }
  }

  navigateTo(url: string[]): void {
    this.router.navigate(url);
    window.scrollTo(0, 0);
  }

}
