import { Component } from '@angular/core';

import { CoreHttpService } from 'app/infrastructure/core-services/http';

@Component({
  selector: 'app-playground-error',
  templateUrl: './playground-error.component.html',
  styleUrls: ['./playground-error.component.scss']
})
export class PlaygroundErrorComponent {

  constructor(private coreHttpService: CoreHttpService) { }

  public throwErrorClicked(): void {
    throw new Error('Hello from the Playground.');
  }

  public forceErrorFromServerClicked(): void {
    const relativeUrl = 'Individuals/Error';
    this.coreHttpService.getAsync(relativeUrl);
  }
}
