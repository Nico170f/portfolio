import { Component } from '@angular/core';
import { ProjectComponent, type Project } from '@app/components/project/project.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-personal-projects',
  imports: [ProjectComponent, MatIconModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
  githubLink = 'https://github.com/Nico170f';
  linkedInLink = 'https://www.linkedin.com/in/nicolai-hansen-332004276/';

  projects: Project[] = [
    {
      title: 'Discord Bot',
      description: `In 2020-2021 I worked for a Minecraft network called SkullWars. I created a Discord bot that was used to manage both the Minecraft and Discord server. 
      The program created dynamic images using node-canvas with data from a MySQL database.`,
      logoPath: `discord-icon.svg`,
      chips: ['js', 'mongodb', 'mysql'],
      showToolTip: true,
      projectLink: 'https://github.com/Nico170f/skullwars-discord-bot',
    },
    {
      title: 'Minecraft Plugin',
      description: `While working for SkullWars I also made Minecraft plugins. I hooked into other plugins to collect and save various data to a MySQL database.
      I also implemented changes to improve the combat system, filter chat messages, and other fun features.`,
      logoPath: `java_icon.png`,
      chips: ['java', 'mysql'],
      showToolTip: true,
      projectLink: 'https://github.com/Nico170f/skullwars-factions-core',
    },
  ];
}
