import { IGridOptionsBuilderService } from '.';
import { Grid } from '../../grid';

export interface IGridBuilderService<TModel extends object> {
  startBuildingOptions(): IGridOptionsBuilderService<TModel>;
  buildGrid(): Grid<TModel>;
}
