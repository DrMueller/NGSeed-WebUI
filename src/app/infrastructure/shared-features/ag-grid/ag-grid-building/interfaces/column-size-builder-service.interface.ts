import { IColumnDefinitionBuilderService } from './column-definition-builder-service.interface';

export interface IColumnSizeBuilderService<TModel extends object> {
  withWidth(width: number): IColumnDefinitionBuilderService<TModel>;
  withFitSoSize(): IColumnDefinitionBuilderService<TModel>;
}
