import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-topic',
  templateUrl: './interest-topic.component.html',
  styleUrls: ['./interest-topic.component.scss']
})
export class InterestTopicComponent implements OnInit {
  topics: any;

  constructor() { }

  ngOnInit(): void {
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
