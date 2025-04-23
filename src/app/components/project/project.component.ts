import { Component, Inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Project {
  title: string;
  description: string;
  logoPath: string;
  chips: ChipType[];
  showToolTip?: boolean;
}

export type ChipType =
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
  | 'mineflayer'
  | 'mysql'
  | 'java';

export interface TechChip {
  tag: ChipType;
  name: string;
  // color: string;
}

@Component({
  selector: 'app-project',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatTooltipModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  //input project
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
    mysql: {
      tag: 'mysql',
      name: 'MySQL',
    },
    java: {
      tag: 'java',
      name: 'Java',
    },
  };

  @Input() project!: Project;
}
