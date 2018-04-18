import {
  Grid, GridBuilderService, GetRowStyleCallback
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Individual } from '../../models';

export class GridBuilder {
  public static buildGrid(gridBuilder: GridBuilderService<Individual>, getRowStyleCallback: GetRowStyleCallback<Individual>): Grid<Individual> {
    const result = gridBuilder
      .startBuildingOptions()
      .withAutoSizeColumns(true)
      .withRowStyleCallback(getRowStyleCallback)
      .startBuildingColumnDefinition('ID', 'id')
      .startBuildingColumnSize()
      .withWidth(100)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('First Name', 'firstName')
      .startBuildingColumnSize()
      .withWidth(200)
      .withCellStyleObject({ color: 'red', 'background-color': 'green' })
      .withSuppressMenu(false)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('Last Name', 'lastName')
      .startBuildingColumnSize()
      .withFitSoSize()
      .withSuppressSorting(true)
      .buildColumnDefinition()
      .buildGridOptions()
      .buildGrid();

    return result;
  }
}
