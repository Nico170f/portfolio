import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
interface Icon {
  toolTip: string;
  path: string;
}

@Component({
  selector: 'app-about-me',
  imports: [MatIconModule, MatTooltipModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  iconPath = '../../../../assets/icons/';
  icons: Icon[] = [
    {
      toolTip: 'Angular',
      path: 'angular.svg',
    },
    {
      toolTip: 'MongoDB',
      path: 'mongodb.svg',
    },
    {
      toolTip: 'C#',
      path: 'csharp.svg',
    },
    {
      toolTip: 'CSS',
      path: 'css.svg',
    },
    {
      toolTip: 'Electron',
      path: 'electron.svg',
    },
    {
      toolTip: 'HTML',
      path: 'html.svg',
    },
    {
      toolTip: 'TypeScript',
      path: 'typescript.svg',
    },
    {
      toolTip: 'Java',
      path: 'java.svg',
    },
    {
      toolTip: 'JavaScript',
      path: 'javascript.svg',
    },
    {
      toolTip: 'MySQL',
      path: 'mysql.svg',
    },
    {
      toolTip: 'PostgreSQL',
      path: 'postgresql.svg',
    },
  ];
}
