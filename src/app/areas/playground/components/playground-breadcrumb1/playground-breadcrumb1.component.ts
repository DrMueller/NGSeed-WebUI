import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-playground-breadcrumb1',
  templateUrl: './playground-breadcrumb1.component.html',
  styleUrls: ['./playground-breadcrumb1.component.scss']
})
export class PlaygroundBreadcrumb1Component implements OnInit {
  items: MenuItem[];

  home: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
    ];

    this.home = { icon: 'fa fa-home' };
  }
}
