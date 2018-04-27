import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playground-breadcrumb3',
  templateUrl: './playground-breadcrumb3.component.html',
  styleUrls: ['./playground-breadcrumb3.component.scss']
})
export class PlaygroundBreadcrumb3Component implements OnInit {
  public someId: number;

  public constructor(
    private route: ActivatedRoute) { }

  public ngOnInit() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.params.subscribe(params => {
      this.someId = +params['someId'];
    });
  }
}
