import { ColDef } from 'ag-grid';

import { IColumnDefinitionBuilderService, IColumnSizeBuilderService } from '../interfaces';

export class ColumnSizeBuilderService<TModel extends object> implements IColumnSizeBuilderService<TModel> {
  constructor(private columnDefinitionBuilder: IColumnDefinitionBuilderService<TModel>, private colDef: ColDef) {
  }

  withWidth(width: number): IColumnDefinitionBuilderService<TModel> {
    this.colDef.width = width;
    this.colDef.suppressSizeToFit = true;
    return this.columnDefinitionBuilder;
  }
  withFitSoSize(): IColumnDefinitionBuilderService<TModel> {
    this.colDef.suppressSizeToFit = false;
    return this.columnDefinitionBuilder;
  }
}
