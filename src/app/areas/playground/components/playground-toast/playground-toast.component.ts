import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';

@Component({
  selector: 'app-playground-toast',
  templateUrl: './playground-toast.component.html',
  styleUrls: ['./playground-toast.component.scss']
})
export class PlaygroundToastComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  public showSuccess(): void {
    this.toastService.showSuccessToast('Hello Success', 'Success Title');
  }

  public showInfo(): void {
    this.toastService.showInfoToast('Hello Info');
  }

  public showError(): void {
    this.toastService.showErrorToast('Hello Error');
  }

}
