import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localeDa from '@angular/common/locales/da';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  ProjectComponent,
  type ChipType,
  type Project,
  type TechChip,
} from '@app/components/project/project.component';

registerLocaleData(localeDa);

@Component({
  selector: 'app-valoks-section',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatTooltipModule, ProjectComponent],
  templateUrl: './valoks-section.component.html',
  styleUrl: './valoks-section.component.scss',
})
export class ValoksSectionComponent {
  valoksWebsiteURL = 'https://valoks.com';
  valoksGithubURL = 'https://github.com/valoks';
  valoksLinkedInURL = 'https://www.linkedin.com/company/valoks/';
  mccYoutubeURL = 'https://www.youtube.com/@mccvaloks';

  chips: Record<ChipType, TechChip> = {
    ts: {
      tag: 'ts',
      name: 'TypeScript',
      // color: '#007acc',
    },
    js: {
      tag: 'js',
      name: 'JavaScript',
      // color: '#f0db4f',
    },
    mongodb: {
      tag: 'mongodb',
      name: 'MongoDB',
    },
    express: {
      tag: 'express',
      name: 'Express',
    },
    angular: {
      tag: 'angular',
      name: 'Angular',
    },
    electron: {
      tag: 'electron',
      name: 'Electron',
    },
    dynamodb: {
      tag: 'dynamodb',
      name: 'DynamoDB',
    },
    kubernetes: {
      tag: 'kubernetes',
      name: 'Kubernetes',
    },
    sqs: {
      tag: 'sqs',
      name: 'SQS',
    },
    docker: {
      tag: 'docker',
      name: 'Docker',
    },
    redis: {
      tag: 'redis',
      name: 'Redis',
    },
    csharp: {
      tag: 'csharp',
      name: 'C#',
    },
    mineflayer: {
      tag: 'mineflayer',
      name: 'Mineflayer',
    },
  };

  projects: Project[] = [
    {
      title: 'AFK Console Client',
      description: `The AFK Console Client is a free, widely-used tool with over 5.000 users and
                90.000+ launches. Seamlessly connect tons
                of accounts while using significantly less resources.`,
      logoPath: `acc-free.svg`,
      chips: [
        this.chips['ts'],
        this.chips['mongodb'],
        this.chips['express'],
        this.chips['angular'],
        this.chips['electron'],
        this.chips['csharp'],
        this.chips['mineflayer'],
      ],
      showToolTip: true,
    },
    {
      title: 'Web Console Client',
      description: `This is sample text for the Web Console Client. It is a free, widely-used tool with over 5.000 users and`,
      logoPath: `temp.svg`,
      chips: [
        this.chips['ts'],
        this.chips['express'],
        this.chips['dynamodb'],
        this.chips['kubernetes'],
        this.chips['sqs'],
        this.chips['docker'],
        this.chips['redis'],
      ],
      showToolTip: true,
    },
    {
      title: 'Coming soon...?',
      description: `Big things are coming soon!`,
      logoPath: `loading.svg`,
      chips: [],
    },
  ];

  stats = [
    {
      value: '13.440.600+',
      description: 'Minecraft Bots Connected',
      icon: 'android',
      toolTipText: 'Total number of Minecraft bots connected from our app',
    },
    {
      value: '27.105+',
      description: 'Unique Users',
      icon: 'person',
      toolTipText: `Total number of unique users who've verified using Discord`,
    },
    {
      value: '93.956+',
      description: 'App Launches',
      icon: 'rocket_launch',
      toolTipText: 'Total number of times our app has been launched',
    },
    {
      value: '13.068+',
      description: 'Unique Servers',
      icon: 'sports_esports',
      toolTipText: 'Total number of unique Minecraft servers connected to by our app',
    },
    {
      value: '20.540+',
      description: 'Discord Members',
      icon: 'groups',
      toolTipText: 'Total number of Discord members in our server',
    },
  ];
}
