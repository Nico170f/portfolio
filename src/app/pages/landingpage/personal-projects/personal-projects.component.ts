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
      title: 'SkullWars Discord Bot',
      description: ``,
      logoPath: `111.svg`,
      chips: ['js', 'mongodb', 'mysql'],
      showToolTip: true,
    },
    {
      title: 'SkullWars Plugin',
      description: ``,
      logoPath: `111.svg`,
      chips: ['java', 'mysql'],
      showToolTip: true,
    },
  ];
}
