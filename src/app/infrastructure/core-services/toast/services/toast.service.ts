import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  constructor(private toastrService: ToastrService) {
  }

  public showInfoToast(message: string, title?: string): void {
    this.toastrService.info(message, title);
  }

  public showSuccessToast(message: string, title?: string): void {
    this.toastrService.success(message, title);
  }

  public showErrorToast(message: string, title?: string): void {
    this.toastrService.error(message, title);
  }
}
