import { RowSelectionType } from '../models';
import { GetRowStyleCallback } from '../types';
import { IColumnDefinitionBuilderService } from './column-definition-builder-service.interface';
import { IGridBuilderService } from './grid-builder-service.interface';

export interface IGridOptionsBuilderService<TModel extends object> {
  startBuildingColumnDefinition(headerName: string, fieldName: string): IColumnDefinitionBuilderService<TModel>;
  withAnimatedRows(doAnimate: boolean): IGridOptionsBuilderService<TModel>;
  withRowSelectionType(type: RowSelectionType): IGridOptionsBuilderService<TModel>;
  withRowStyleCallback<T>(callback: GetRowStyleCallback<T>): IGridOptionsBuilderService<TModel>;
  withEnableSorting(doEnable: boolean): IGridOptionsBuilderService<TModel>;
  withEnableColResize(doEnable: boolean): IGridOptionsBuilderService<TModel>;
  withAutoSizeColumns(doAutosize: boolean): IGridOptionsBuilderService<TModel>;
  buildGridOptions(): IGridBuilderService<TModel>;
}
