import { Injectable } from '@angular/core';

import { GridOptions } from 'ag-grid';

import { IGridBuilderService, IGridOptionsBuilderService } from '../interfaces';
import { Grid } from '../models';
import { GridOptionsBuilderService } from './grid-options-builder.service';

@Injectable()
export class GridBuilderService<TModel extends object> implements IGridBuilderService<TModel> {
  private _gridOptions: GridOptions;

  public startBuildingOptions(): IGridOptionsBuilderService<TModel> {
    this._gridOptions = {};
    const result = new GridOptionsBuilderService(this, this._gridOptions);
    return result;
  }

  public buildGrid(): Grid<TModel> {
    const result = new Grid<TModel>(this._gridOptions);
    return result;
  }
}
