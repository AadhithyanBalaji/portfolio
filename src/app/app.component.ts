import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

export class Tech {
  constructor(
    public name: string,
    public src: string,
    public tooltip: string = name
  ) {}
}

export class Project {
  constructor(
    public name: string,
    public desc: string,
    public start: Date,
    public end: Date,
    public link: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobile: boolean;
  mediaObserver: Subscription;
  techs = [
    new Tech('Angular 6+', 'assets/images/angular.svg'),
    new Tech('.NET/.NET Core', 'assets/images/dotnet.png'),
    new Tech('SQL Server', 'assets/images/sqlserver.jpg'),
    new Tech('Google Firebase', 'assets/images/firebase.png'),
    new Tech('Google Maps API', 'assets/images/gmaps.png'),
    new Tech('Angular Material', 'assets/images/angularmaterial.png'),
    new Tech('Bootstrap 3+', 'assets/images/bootstrap.png'),
    new Tech('Java', 'assets/images/java.jpg'),
    new Tech('Figma', 'assets/images/figma.svg'),
    new Tech('Python', 'assets/images/python.png'),
  ];

  projects = [
    new Project(
      'Amazon review scraper',
      'Python based review scraping to word cloud',
      new Date(2018, 8, 1, 0, 0, 0, 0),
      new Date(2018, 11, 1, 0, 0, 0, 0),
      ''
    ),    
    new Project(
      'UAM',
      'Collect and Aggregate user activity across a website',
      new Date(2019, 7, 1, 0, 0, 0, 0),
      new Date(2020, 3, 1, 0, 0, 0, 0),
      ''
    ),
    new Project(
      'Sepla',
      'End to end tracking of purchased materials upto execution and measurements for an Electrical contracting company',
      new Date(2020, 10, 1, 0, 0, 0, 0),
      new Date(2021, 2, 1, 0, 0, 0, 0),
      'https://aadhithyanbalaji.github.io/sepla/'
    ),
    new Project(
      'GKeep clone',
      'Pixel-for-pixel replica of Google Keep to-do app',
      new Date(2021, 6, 1, 0, 0, 0, 0),
      new Date(2021, 10, 1, 0, 0, 0, 0),
      'https://aadhithyanbalaji.github.io/gkeep-clone/'
    ),
    new Project(
      'Support Dashboard',
      'Dashboard to track time and payout for support activity',
      new Date(2021, 11, 1, 0, 0, 0, 0),
      new Date(2022, 3, 1, 0, 0, 0, 0),
      ''
    ),
    new Project(
      'Jewelry Order Form',
      'Angular material form to place order for jewelry at your trusted jewellers',
      new Date(2022, 1, 10, 0, 0, 0, 0),
      new Date(2022, 1, 11, 0, 0, 0, 0),
      'https://aadhithyanbalaji.github.io/jewelry-portal/'
    ),    
    new Project(
      'Shopping portal UI clone',
      'Static shopping website clone of Storeonme',
      new Date(2019, 3, 5, 0, 0, 0, 0),
      new Date(2019, 3, 8, 0, 0, 0, 0),
      'https://aadhithyanbalaji.github.io/storeonme/'
    ),
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.mediaObserver = this.breakpointObserver
      .observe('(max-width: 500px)')
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
        console.log(this.isMobile);
      });
  }

  openProjectInNewTab(link: string) {
    if (link === '') return;
    window.open(link);
  }

  ngOnDestroy(): void {
    this.mediaObserver.unsubscribe();
  }
}
