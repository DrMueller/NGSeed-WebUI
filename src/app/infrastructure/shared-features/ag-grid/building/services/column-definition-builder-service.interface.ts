import { IColumnSizeBuilderService } from './column-size-builder-service.interface';
import { IGridOptionsBuilderService } from './grid-options-builder-service.interface';

export interface IColumnDefinitionBuilderService<TModel extends object> {
  buildColumnDefinition(): IGridOptionsBuilderService<TModel>;
  withCellStyleObject(styleObjs: {}): IColumnDefinitionBuilderService<TModel>;
  withSuppressMenu(doSuppress: boolean): IColumnDefinitionBuilderService<TModel>;
  withSuppressSorting(doSuppress: boolean): IColumnDefinitionBuilderService<TModel>;
  startBuildingColumnSize(): IColumnSizeBuilderService<TModel>;
}
