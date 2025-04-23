/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

const ANGULAR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#dd0031" d="M16 2L2.966 6.648l1.988 17.234L16 30l11.046-6.118l1.988-17.234L16 2z"/><path fill="#c3002f" d="M16 2v3.108v-.014V30l11.046-6.118l1.988-17.234L16 2z"/><path fill="#fff" d="m16 5.094l-8.148 18.27h3.038l1.638-4.088h6.916l1.638 4.088h3.038L16 5.094Zm2.38 11.662h-4.76L16 11.03Z"/></svg>`;

@Component({
  selector: 'app-footer',
  imports: [MatSnackBarModule, MatIconModule, MatTooltipModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  email: string = 'nicolai@valoks.com';
  githubLink: string = 'https://github.com/Nico170f/portfolio';
  linkedinLink: string = 'https://www.linkedin.com/in/nicolai-hansen-332004276/';
  githubProfileLink: string = 'https://github.com/Nico170f';

  constructor(
    icon: MatIconRegistry,
    sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard,
  ) {
    icon.addSvgIconLiteral('angular', sanitizer.bypassSecurityTrustHtml(ANGULAR_ICON));
  }

  openLink(text: string) {
    window.open(text, '_blank');
  }

  copy(text: string) {
    this._snackBar.open('Copied to clipboard', undefined, {
      duration: 750,
      horizontalPosition: 'center',
    });

    this.clipboard.copy(text);
  }
}
