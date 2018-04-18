import { ColDef, GridOptions } from 'ag-grid';

import { IColumnDefinitionBuilderService, IGridOptionsBuilderService } from '../interfaces';
import { IGridBuilderService } from '../interfaces/grid-builder-service.interface';
import { RowSelectionType } from '../models';
import { GetRowStyleCallback } from '../types';
import { ColumnDefinitionBuilderService } from './column-definition-builder.service';
import { RowSelectionTypeMappingHandler } from './handlers';

export class GridOptionsBuilderService<TModel extends object> implements IGridOptionsBuilderService<TModel> {
  private _colDefs: ColDef[];

  public constructor(private gridBuilder: IGridBuilderService<TModel>, private gridOptions: GridOptions) {
    this._colDefs = new Array();
    this.setGridOptionsDefaults();
  }

  public buildGridOptions(): IGridBuilderService<TModel> {
    this.gridOptions.columnDefs = this._colDefs;
    return this.gridBuilder;
  }

  public startBuildingColumnDefinition(headerName: string, fieldName: string): IColumnDefinitionBuilderService<TModel> {
    const colBuilder = new ColumnDefinitionBuilderService(
      this,
      this._colDefs,
      headerName,
      fieldName);
    return colBuilder;
  }

  public withAnimatedRows(doAnimate: boolean): IGridOptionsBuilderService<TModel> {
    this.gridOptions.animateRows = doAnimate;
    return this;
  }

  public withAutoSizeColumns(doAutosize: boolean): IGridOptionsBuilderService<TModel> {
    if (doAutosize) {
      this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
      this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
    }

    return this;
  }

  public withEnableColResize(doEnable: boolean): IGridOptionsBuilderService<TModel> {
    this.gridOptions.enableColResize = doEnable;
    return this;
  }

  public withEnableSorting(doEnable: boolean): IGridOptionsBuilderService<TModel> {
    this.gridOptions.enableSorting = doEnable;
    return this;
  }

  public withRowSelectionType(type: RowSelectionType): IGridOptionsBuilderService<TModel> {
    this.gridOptions.rowSelection = RowSelectionTypeMappingHandler.map(type);
    return this;
  }

  public withRowStyleCallback<T>(callback: GetRowStyleCallback<T>): IGridOptionsBuilderService<TModel> {
    this.gridOptions.getRowStyle = callback;
    return this;
  }

  private setGridOptionsDefaults(): void {
    this.gridOptions.animateRows = true;
    this.gridOptions.enableFilter = true;
    this.gridOptions.rowSelection = RowSelectionTypeMappingHandler.map(RowSelectionType.Single);
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableColResize = true;
    this.gridOptions.enableServerSideSorting = false;
  }

  private sizeColumnsIfReady(): void {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }
}
