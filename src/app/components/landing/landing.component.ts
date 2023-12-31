import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';

interface Project {
  logo: string;
  title: string;
  routerlink: string;
  chips: string[];
  desc: string;
}

interface Experience {
  tooltip: string;
  icon: string;
}

const experience: Experience[] = [
  {
    tooltip: 'Electron',
    icon: '../../../assets/electron.svg'
  },
  {
    tooltip: 'TypeScript',
    icon: '../../../assets/typescript.svg'
  },
  {
    tooltip: 'Angular',
    icon: '../../../assets/angular.svg'
  },
  {
    tooltip: 'JavaScript',
    icon: '../../../assets/javascript.svg'
  },
  {
    tooltip: 'C#',
    icon: '../../../assets/csharp.svg'
  },
  {
    tooltip: 'HTML',
    icon: '../../../assets/html.svg'
  },
  {
    tooltip: 'CSS',
    icon: '../../../assets/css.svg'
  },
  {
    tooltip: 'MongoDB',
    icon: '../../../assets/mongodb.svg'
  },
  {
    tooltip: 'MySQL',
    icon: '../../../assets/mysql.svg'
  },
  {
    tooltip: 'Java',
    icon: '../../../assets/javalogo.svg'
  },
];



const projects: Project[] = [
  {
    logo: '../../../assets/acc-logo2.svg',
    title: 'AFKCC',
    routerlink: 'afkconsoleclient',
    chips: ['Typescript', 'MongoDB', 'Electron', 'Express', 'Angular'],
    desc: 'The AFK Console Client is a free, widely-used tool with over 5.000 users and 90.000+ launches. Seamlessly connect tons of accounts while using significantly less resources.'
  },
  {
    logo: '../../../assets/discord.svg',
    title: 'Factions Bot',
    routerlink: 'skullwars-discordbot',
    chips: ['JavaScript', 'MongoDB', 'MySQL'],
    desc: 'The SkullWars Discord bot handled moderation and tickets, performed image manipulation to visualize in-game data, and much more.'
  },
  {
    logo: '../../../assets/java.svg',
    title: 'SkullCore',
    routerlink: 'skullwars-core',
    chips: ['Java', 'MySQL', 'Bukkit'],
    desc: '"All in one" plugin created for SkullWars. SkullCore kept an eye on chat, improved the gameplay experience, and provided a wide range of QoL features.'
  }
];

const GITHUB_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>`;
const LINKEDIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M21 21h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S13 13.19 13 14.25V21H9V9h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V21"></path><path d="M7 21H3V9h4v12"></path><path d="M5 3a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"></path></svg>`;
@Component({
  selector: 'app-frontpage',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(180, style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class LandingComponent {

  constructor(
    icon: MatIconRegistry,
    sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    private clipboard: Clipboard,
    public router: Router,
  ) {
    icon.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
    icon.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(LINKEDIN_ICON));
  }

  experience = experience;
  projects = projects;
  user_image = '../../../assets/selfie.jpg';

  openLink(text: string) {
    window.open(text, '_blank');
  }

  copy(text: string) {
    this._snackBar.open('Copied to clipboard', undefined, {
      duration: 750,
      horizontalPosition: 'center',
    });

    this.clipboard.copy(text);
  }


  navigateTo(url: string[]): void {
    this.router.navigate(url);
    // window.scrollTo(0, 0);
  }

  // ! setImage() {
  // !   this.user_image = '../../../assets/selfie2.gif';
  // !   console.log('entered');
  // ! }

  // ! resetImage() {
  // !   this.user_image = '../../../assets/selfie.jpg';
  // !   console.log('left');
  // ! };
}
