/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OnDestroy, OnInit, TransferState } from '@angular/core';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe, registerLocaleData } from '@angular/common';
import localeDa from '@angular/common/locales/da';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProjectComponent, type Project } from '@app/components/project/project.component';
import { StatData, StatsSignalrService } from '@app/services/stats-signalr.service';
import { signal } from '@angular/core';
import type { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { CountUp } from 'countup.js';

registerLocaleData(localeDa);

interface CurrentStatsResponse {
  botsConnected: number;
  uniqueUsers: number;
  appLaunches: number;
  uniqueServers: number;
  discordMembers: number;
}

@Component({
  selector: 'app-valoks-section',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    ProjectComponent,
    DecimalPipe,
  ],
  templateUrl: './valoks-section.component.html',
  styleUrl: './valoks-section.component.scss',
  providers: [DecimalPipe],
})
export class ValoksSectionComponent implements OnInit, OnDestroy {
  private animationFrameId: number | null = null;
  private animationDuration = 800;

  subscriptions: Subscription[] = [];

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
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    this.isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

    this.fetchCurrentStats();

    const statsSub = this.statsService.stats$.subscribe((data: StatData) => {
      if (data) {
        switch (data.updateType) {
          case 'BotsConnected':
            this.animateCount(this.botsConnectedStat, data.value, 'botsConnectedStat');
            break;
          case 'UniqueUsers':
            this.animateCount(this.uniqueUsersStat, data.value, 'uniqueUsersStat');
            break;
          case 'AppLaunches':
            this.animateCount(this.appLaunchesStat, data.value, 'appLaunchesStat');
            break;
          case 'UniqueServers':
            this.animateCount(this.uniqueServersStat, data.value, 'uniqueServersStat');
            break;
          case 'DiscordMembers':
            this.animateCount(this.discordMembersStat, data.value, 'discordMembersStat');
            break;
        }
      }
    });

    this.subscriptions.push(statsSub);
  }

  private async fetchCurrentStats(): Promise<void> {
    const currentStats: Response = await fetch('https://free.minecraftafk.com/stats/current', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (currentStats.ok) {
      try {
        const result: CurrentStatsResponse = await currentStats.json();
        console.log(result);

        this.animateCount(this.botsConnectedStat, result.botsConnected, 'botsConnectedStat');
        this.animateCount(this.uniqueUsersStat, result.uniqueUsers, 'uniqueUsersStat');
        this.animateCount(this.appLaunchesStat, result.appLaunches, 'appLaunchesStat');
        this.animateCount(this.uniqueServersStat, result.uniqueServers, 'uniqueServersStat');
        this.animateCount(this.discordMembersStat, result.discordMembers, 'discordMembersStat');
      } catch (error) {
        console.error('Error parsing stats response:', error);
      }
    }
  }

  private animateCount(statSignal: any, newValue: number, elementId?: string): void {
    // Immediate update for SSR
    if (!isPlatformBrowser(this.platformId)) {
      statSignal.set(newValue);
      return;
    }

    const startValue = statSignal();

    statSignal.set(newValue);

    if (elementId) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const countUp = new CountUp(element, newValue, {
            startVal: startValue,
            duration: 1,
            useEasing: true,
            useGrouping: true,
            separator: '.',
            decimal: ',',
          });

          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(countUp.error);
          }
        }
      }, 0);
    }
  }

  // private animateCount2(statSignal: any, newValue: number): void {
  //   // Clear any existing animation

  //   if (this.animationFrameId !== null) {
  //     cancelAnimationFrame(this.animationFrameId);
  //   }

  //   const startValue = statSignal();
  //   const startTime = performance.now();
  //   const endTime = startTime + this.animationDuration;
  //   const valueToAdd = newValue - startValue;

  //   // Don't animate if values are the same
  //   if (valueToAdd === 0) return;

  //   const updateCount = (currentTime: number) => {
  //     const timeProgress = Math.min(1, (currentTime - startTime) / this.animationDuration);

  //     const progress = 1 - Math.pow(1 - timeProgress, 3);

  //     const currentValue = Math.round(startValue + valueToAdd * progress);
  //     statSignal.set(currentValue);

  //     if (timeProgress < 1) {
  //       this.animationFrameId = requestAnimationFrame(updateCount);
  //     } else {
  //       statSignal.set(newValue);
  //       this.animationFrameId = null;
  //     }
  //   };

  //   this.animationFrameId = requestAnimationFrame(updateCount);
  // }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
