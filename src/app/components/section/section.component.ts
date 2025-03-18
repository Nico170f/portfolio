import { Component, Input } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { DomSanitizer } from '@angular/platform-browser';
import type { SafeResourceUrl } from '@angular/platform-browser';
import type { OnChanges } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  imports: [],
})
export class SectionComponent implements OnChanges {
  @Input() backgroundSvg: string = 'assets/waves/landing-page/w1.svg';

  safeBackgroundSvg: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeBackgroundSvg = this.getBackgroundUrl();
  }

  ngOnChanges() {
    this.safeBackgroundSvg = this.getBackgroundUrl();
  }

  private getBackgroundUrl() {
    const url = `url(${this.backgroundSvg})`;
    return this.sanitizer.bypassSecurityTrustStyle(url);
  }
}
