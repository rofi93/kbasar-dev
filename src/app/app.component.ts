import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string;
  shortBio: string;

  constructor() {
  }

  ngOnInit(): void {
    this.name = 'MD. Khairul Basar';
    this.shortBio = 'Khairul works as a full stack developer. Technology lover, open source contributor and works\n' +
      '    with highly available and scalable applications. Loves to solve technically challenging problems.';
  }
}
