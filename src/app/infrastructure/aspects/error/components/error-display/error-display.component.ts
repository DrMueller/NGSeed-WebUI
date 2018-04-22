import { ChangeDetectorRef, Component, Input } from '@angular/core';

import { ErrorInformation } from '../../models';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})

export class ErrorDisplayComponent {
  @Input()
  public errorInfo: ErrorInformation | null;

  public constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public closeClicked(): void {
    this.cleanErorInfo();
  }
  public onHiding(): void {
    this.cleanErorInfo();
  }

  private cleanErorInfo(): void {
    this.errorInfo = null;
    this.changeDetectorRef.detectChanges();
  }
}
