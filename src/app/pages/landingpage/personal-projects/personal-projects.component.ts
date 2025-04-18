import { Component } from '@angular/core';
import { ProjectComponent, type Project } from '@app/components/project/project.component';

@Component({
  selector: 'app-personal-projects',
  imports: [ProjectComponent],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
  projects: Project[] = [
    {
      title: 'AFK Console Client',
      description: `The AFK Console Client is a free, widely-used tool with over 5.000 users and
                  90.000+ launches. Seamlessly connect tons
                  of accounts while using significantly less resources.`,
      logoPath: `acc-free.svg`,
      chips: ['ts', 'mongodb', 'express', 'angular', 'electron', 'csharp', 'mineflayer'],
      showToolTip: true,
    },
  ];
}
