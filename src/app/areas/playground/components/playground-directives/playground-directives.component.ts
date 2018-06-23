import { Component } from '@angular/core';

@Component({
  selector: 'app-playground-directives',
  templateUrl: './playground-directives.component.html',
  styleUrls: ['./playground-directives.component.scss']
})
export class PlaygroundDirectivesComponent {
  public isBusyIndicatorShown: boolean;

  public isBusyIndicator2Shown: boolean;

  public switchIndicator(): void {
    this.isBusyIndicatorShown = !this.isBusyIndicatorShown;
  }

  public switchIndicator2(): void {
    this.isBusyIndicator2Shown = !this.isBusyIndicator2Shown;
  }
}
