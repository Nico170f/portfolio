import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard
  ) { }

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
