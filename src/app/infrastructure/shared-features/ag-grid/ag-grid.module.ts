import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as builderServices from './building/services/implementation';
import * as extensionComponents from './extensions';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [
    extensionComponents.DeleteButtonCellRendererComponent,
    extensionComponents.AddButtonCellRendererComponent,
    extensionComponents.NumberEditorComponent
  ],
  declarations: [
    extensionComponents.DeleteButtonCellRendererComponent,
    extensionComponents.AddButtonCellRendererComponent,
    extensionComponents.NumberEditorComponent,
  ],
})

export class AgGridModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: AgGridModule,
      providers: [
        builderServices.GridBuilderService
      ]
    };
  }
}
