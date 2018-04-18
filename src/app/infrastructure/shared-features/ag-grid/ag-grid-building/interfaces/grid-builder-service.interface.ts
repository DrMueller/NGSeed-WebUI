import { IGridOptionsBuilderService } from '../interfaces';
import { Grid } from '../models';

export interface IGridBuilderService<TModel extends object> {
  startBuildingOptions(): IGridOptionsBuilderService<TModel>;
  buildGrid(): Grid<TModel>;
}
