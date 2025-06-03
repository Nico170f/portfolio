/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OnDestroy, OnInit, TransferState } from '@angular/core';
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
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { StatData, StatsSignalrService } from '@app/services/stats-signalr.service';
import { signal } from '@angular/core';

registerLocaleData(localeDa);

@Component({
  selector: 'app-valoks-section',
  imports: [MatCardModule, MatChipsModule, MatIconModule, MatTooltipModule, ProjectComponent],
  templateUrl: './valoks-section.component.html',
  styleUrl: './valoks-section.component.scss',
})
export class ValoksSectionComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;
  private animationDuration = 800; // milliseconds

  valoksWebsiteURL = 'https://valoks.com';
  valoksGithubURL = 'https://github.com/valoks';
  valoksLinkedInURL = 'https://www.linkedin.com/company/valoks/';
  mccYoutubeURL = 'https://www.youtube.com/@mccvaloks';

  isMobile = false;

  projects: Project[] = [
    {
      title: 'AFK Console Client',
      description: `Imagine you want to run multiple instances of Minecraft on your computer, but you're worried about your PC's resources. Fear not! Seamlessly connect tons
                of Minecraft accounts while using significantly less resources.`,
      logoPath: `acc-free.svg`,
      chips: ['ts', 'mongodb', 'express', 'angular', 'electron', 'csharp', 'mineflayer'],
      showToolTip: true,
      projectLink: 'https://minecraftafk.com/free',
    },
    {
      title: 'Web Console Client',
      description: `Want your Minecraft accounts online 24/7 to keep earning in-game currency even while you sleep—but don’t want to leave your computer running all the time?
            No problem! With our web console client, you can run your Minecraft accounts in the cloud and control them from anywhere using any device with a web browser.`,
      logoPath: `temp.svg`,
      chips: ['ts', 'express', 'dynamodb', 'kubernetes', 'sqs', 'docker', 'redis'],
      showToolTip: true,
      projectLink: 'https://minecraftafk.com',
    },
    {
      title: 'Coming soon...?',
      description: `Big things are coming soon!`,
      logoPath: `loading.svg`,
      chips: [],
    },
  ];

  botsConnectedStat = signal(14070000);
  uniqueUsersStat = signal(29400);
  appLaunchesStat = signal(584000);
  uniqueServersStat = signal(5700);
  discordMembersStat = signal(22300);

  // private getBotsStats(): number {
  //   return this.botsConnectedStat;
  // }

  stats = [
    {
      value: this.botsConnectedStat,
      description: 'Minecraft Bots Connected',
      icon: 'android',
      toolTipText: 'Total number of Minecraft bots connected from our app',
    },
    {
      value: this.uniqueUsersStat,
      description: 'Unique Users',
      icon: 'person',
      toolTipText: `Total number of unique users who've verified using Discord`,
    },
    {
      value: this.appLaunchesStat,
      description: 'App Launches',
      icon: 'rocket_launch',
      toolTipText: 'Total number of times our app has been launched',
    },
    {
      value: this.uniqueServersStat,
      description: 'Unique Servers',
      icon: 'sports_esports',
      toolTipText: 'Total number of unique Minecraft servers connected to by our app',
    },
    {
      value: this.discordMembersStat,
      description: 'Discord Members',
      icon: 'groups',
      toolTipText: 'Total number of Discord members in our server',
    },
  ];

  constructor(
    private statsService: StatsSignalrService,
    // private transferState: TransferState,
  ) {}

  ngOnInit() {
    this.isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

    // setInterval(() => {
    //   this.botsConnectedStat += 1;
    // }, 1000);

    this.statsService.stats$.subscribe((data: StatData) => {
      if (data) {
        switch (data.updateType) {
          case 'BotsConnected':
            this.animateCount(this.botsConnectedStat, data.value);
            break;
          case 'UniqueUsers':
            this.animateCount(this.uniqueUsersStat, data.value);
            break;
          case 'AppLaunches':
            this.animateCount(this.appLaunchesStat, data.value);
            break;
          case 'UniqueServers':
            this.animateCount(this.uniqueServersStat, data.value);
            break;
          case 'DiscordMembers':
            this.animateCount(this.discordMembersStat, data.value);
            break;
        }
      }
    });
  }

  animateCount(statSignal: any, newValue: number): void {
    // Clear any existing animation
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    const startValue = statSignal();
    const startTime = performance.now();
    const endTime = startTime + this.animationDuration;
    const valueToAdd = newValue - startValue;

    // Don't animate if values are the same
    if (valueToAdd === 0) return;

    const updateCount = (currentTime: number) => {
      const timeProgress = Math.min(1, (currentTime - startTime) / this.animationDuration);

      // Easing function for smooth animation (ease-out)
      const progress = 1 - Math.pow(1 - timeProgress, 3);

      const currentValue = Math.round(startValue + valueToAdd * progress);
      statSignal.set(currentValue);

      if (timeProgress < 1) {
        this.animationFrameId = requestAnimationFrame(updateCount);
      } else {
        // Ensure we end at exactly the target value
        statSignal.set(newValue);
        this.animationFrameId = null;
      }
    };

    this.animationFrameId = requestAnimationFrame(updateCount);
  }

  ngOnDestroy() {
    // Cancel any ongoing animation when component is destroyed
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  // updateStatsDisplay(): void {
  //   this.stats = [
  //     {
  //       value: this.botsConnectedStat,
  //       description: 'Minecraft Bots Connected',
  //       icon: 'android',
  //       toolTipText: 'Total number of Minecraft bots connected from our app',
  //     },
  //     {
  //       value: this.uniqueUsersStat,
  //       description: 'Unique Users',
  //       icon: 'person',
  //       toolTipText: `Total number of unique users who've verified using Discord`,
  //     },
  //     {
  //       value: this.appLaunchesStat,
  //       description: 'App Launches',
  //       icon: 'rocket_launch',
  //       toolTipText: 'Total number of times our app has been launched',
  //     },
  //     {
  //       value: this.uniqueServersStat,
  //       description: 'Unique Servers',
  //       icon: 'sports_esports',
  //       toolTipText: 'Total number of unique Minecraft servers connected to by our app',
  //     },
  //     {
  //       value: this.discordMembersStat,
  //       description: 'Discord Members',
  //       icon: 'groups',
  //       toolTipText: 'Total number of Discord members in our server',
  //     },
  //   ];
  // }
}
