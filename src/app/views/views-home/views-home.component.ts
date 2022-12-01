import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 9023, label: '$ Revenue' },
    { value: 87, label: 'Satisfaction Score' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'couch',
      description: 'Aweseome couch',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'dresser',
      description: 'Incredible dresser',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
