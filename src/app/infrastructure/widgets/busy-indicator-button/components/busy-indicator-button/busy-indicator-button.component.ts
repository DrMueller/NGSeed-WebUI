import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-busy-indicator-button',
  templateUrl: './busy-indicator-button.component.html',
  styleUrls: ['./busy-indicator-button.component.scss']
})
export class BusyIndicatorButtonComponent {

  @Input() public isBusyIndicatorShown: boolean;
  @Input() public buttonClass: string;
  @Output() public buttonClick = new EventEmitter<void>();

  public internalClick(): void {
    this.buttonClick.emit();
  }

}
