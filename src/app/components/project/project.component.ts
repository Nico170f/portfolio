import { Component, Inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Project {
  title: string;
  description: string;
  logoPath: string;
  chips: TechChip[];
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
  | 'mineflayer';

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

  @Input() project!: Project;
}
