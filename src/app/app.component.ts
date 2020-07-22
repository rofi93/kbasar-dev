/* tslint:disable:max-line-length variable-name */
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  topics: any;
  name: string;
  profileBio: any;
  shortBio: string;
  socialMedia: any;
  sanitizer: DomSanitizer;

  constructor(private _sanitizer: DomSanitizer) {
    this.sanitizer = _sanitizer;
  }

  ngOnInit(): void {
    this.name = 'MD. Khairul Basar';
    this.shortBio = 'Khairul works as a full stack developer. Technology lover, ppen source contributor and works with highly\n' +
      '    available and scalable applications. Loves to solve technically challenging problems.';
    this.profileBio = [
      {
        _class: 'octicon mr-2 v-align-middle octicon-mark-github',
        _viewbox: '0 0 16 16',
        width: '20',
        path: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z',
        href: 'https://github.com/rofi93',
        text: 'rofi93',
        label: 'gitHub'
      },
      {
        _class: 'octicon mr-2 v-align-middle octicon-mail',
        _viewbox: '0 0 14 16',
        width: '17',
        path: 'M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z',
        href: 'mailto:khairul@kbasar.dev',
        text: 'khairul@kbasar.dev',
        label: 'email'
      },
      {
        _class: 'octicon mr-2 v-align-middle octicon-location',
        _viewbox: '0 0 12 16',
        width: '15',
        path: 'M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z',
        href: '',
        text: 'Dhaka, Bangladesh',
        label: 'location'
      }
    ];
    this.socialMedia = [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/khairul.basar93/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4"><path d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z" fill="#959da5"/></svg>')
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/khairulbasar/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="#959da5"/></svg>')
      },
      {
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/u/3968623/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="24" fill="#959da5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path class="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/><path class="st1" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/></svg>')
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/khairulbasar93',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="#959da5"/></svg>')
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@khairul.basar',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg width="20" height="20" viewBox="32 25 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z" id="Shape" fill="#959da5"></path></svg>')
      }
    ];
    this.topics = [
      {
        name: 'C#',
        href: 'https://github.com/topics/csharp',
        src: 'assets/img/csharp.png'
      },
      {
        name: 'Python',
        href: 'https://github.com/topics/python',
        src: 'assets/img/python.png'
      },
      {
        name: 'TypeScript',
        href: 'https://github.com/topics/typescript',
        src: 'assets/img/typescript.png'
      },
      {
        name: 'ASP.NET',
        href: 'https://github.com/topics/aspnet',
        src: 'assets/img/aspnet.png'
      },
      {
        name: 'Django',
        href: 'https://github.com/topics/django',
        src: 'assets/img/django.png'
      },
      {
        name: 'Angular',
        href: 'https://github.com/topics/angular',
        src: 'assets/img/angular.png'
      },
      {
        name: '.NET',
        href: 'https://github.com/topics/dotnet',
        src: 'assets/img/dotnet.png'
      },
      {
        name: 'JavaScript',
        href: 'https://github.com/topics/javascript',
        src: 'assets/img/javascript.png'
      },
      {
        name: 'NodeJS',
        href: 'https://github.com/topics/nodejs',
        src: 'assets/img/nodejs.png'
      },
      {
        name: 'MongoDB',
        href: 'https://github.com/topics/mongodb',
        src: 'assets/img/mongodb.png'
      },
      {
        name: 'SQL',
        href: 'https://github.com/topics/sql',
        src: 'assets/img/sql.png'
      },
      {
        name: 'PostgreSQL',
        href: 'https://github.com/topics/postgresql',
        src: 'assets/img/postgresql.png'
      },
      {
        name: 'Docker',
        href: 'https://github.com/topics/docker',
        src: 'assets/img/docker.png'
      },
      {
        name: 'Redux',
        href: 'https://github.com/topics/redux',
        src: 'assets/img/redux.png'
      },
      {
        name: 'GraphQL',
        href: 'https://github.com/topics/graphql',
        src: 'assets/img/graphql.png'
      }
    ];
  }
}
