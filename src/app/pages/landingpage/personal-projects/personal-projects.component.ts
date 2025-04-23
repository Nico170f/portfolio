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
      title: 'dddddd',
      description: `ddddddd.`,
      logoPath: `acc-free.svg`,
      chips: ['ts', 'mongodb', 'express', 'angular', 'electron', 'csharp', 'mineflayer'],
      showToolTip: true,
    },
  ];
}
