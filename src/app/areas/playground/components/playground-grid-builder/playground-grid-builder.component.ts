import { Component, OnInit } from '@angular/core';

import {
  Grid, GridBuilderService, RowStyleObject
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Individual } from '../../models';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-playground-grid-builder',
  templateUrl: './playground-grid-builder.component.html',
  styleUrls: ['./playground-grid-builder.component.scss']
})
export class PlaygroundGridBuilderComponent implements OnInit {
  public grid: Grid<Individual>;

  constructor(
    private gridBuilder: GridBuilderService<Individual>) {
  }

  ngOnInit() {
    this.grid = GridBuilder.buildGrid(this.gridBuilder, this.getGridRowStyle.bind(this));
    const individuals = Individual.createSome();
    this.grid.initializeEntries(individuals);
  }

  public removeRowClicked(): void {
    this.grid.entries.splice(0, 1);
  }

  public changePropertyClicked(): void {
    this.grid.entries[0].firstName = this.grid.entries[0].firstName + '2';
  }

  public changeAllClicked(): void {
    this.grid.entries.forEach(f => {
      f.lastName = f.lastName + ' Updated!';
    });
  }

  public addRowClicked(): void {
    const ind = new Individual();
    ind.lastName = 'Lannister';
    ind.firstName = 'Tyrion';
    ind.id = 'z1324';
    this.grid.entries.push(ind);
  }

  private getGridRowStyle(row: RowStyleObject<Individual>): any {
    if (row.data.lastName === 'Lannister') {
      return { background: 'orange' };
    }

    return undefined;
  }
}
