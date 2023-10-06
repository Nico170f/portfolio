import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-text',
  templateUrl: './bubble-text.component.html',
  styleUrls: ['./bubble-text.component.scss']
})
export class BubbleTextComponent {

  @Input() inputText: string = '';

}
