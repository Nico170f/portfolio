import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  title: string;
  description: string;
  logoPath: string;
  chips: TechChip[];
}

type ChipType =
  | 'ts'
  | 'js'
  | 'mongodb'
  | 'express'
  | 'angular'
  | 'electron'
  | 'dynamodb'
  | 'kubernetes'
  | 'sqs'
  | 'docker'
  | 'redis'
  | 'csharp'
  | 'mineflayer';

interface TechChip {
  tag: ChipType;
  name: string;
  // color: string;
}

@Component({
  selector: 'app-valoks-section',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './valoks-section.component.html',
  styleUrl: './valoks-section.component.scss',
})
export class ValoksSectionComponent {
  imagesPath = '../../../../assets/images/';

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
    },
    {
      title: 'Web Console Client',
      description: `The AFK Console Client is a free, widely-used tool with over 5.000 users and
                90.000+ launches. Seamlessly connect tons
                of accounts while using significantly less resources.`,
      logoPath: `acc-free1.svg`,
      chips: [
        this.chips['ts'],
        this.chips['express'],
        this.chips['dynamodb'],
        this.chips['kubernetes'],
        this.chips['sqs'],
        this.chips['docker'],
        this.chips['redis'],
      ],
    },
  ];
}
