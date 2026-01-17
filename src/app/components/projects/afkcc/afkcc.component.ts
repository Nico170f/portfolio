import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afkcc',
  templateUrl: './afkcc.component.html',
  styleUrls: ['./afkcc.component.scss']
})
export class AfkccComponent {

  constructor(
    private router: Router
  ) {

  }

  stats = [
    {
      icon: 'network_ping',
      amount: '1.493.199',
      title: 'Connections',
      description: `The Minecraft AFK Console Client has successfully connected over 1.500.000 Minecraft accounts, streamlining the login process and saving users valuable time.`
    },
    {
      icon: 'person',
      amount: '5.116',
      title: 'Unique Users',
      description: `With a thriving community of over 5.000 users, this project has gained significant recognition within the Minecraft community.`
    },
    {
      icon: 'launch',
      amount: '93.955',
      title: 'Client Launches',
      description: `The client has been launched over 90.000 times, showcasing its reliability and popularity among Minecraft players.`
    },
  ];

  projectDescription = 'Elevating 5000+ Players\' Experience';
  // test = 'Simplifying Account Management';

  navigateTo(url: string[]): void {
    this.router.navigate(url);
    window.scrollTo(0, 0);
  }

}
