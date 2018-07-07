import { Component, OnInit } from '@angular/core';

import {
    Grid, GridBuilderService, RowStyleObject
} from 'app/infrastructure/shared-features/ag-grid';

import { Individual } from '../../models';
import { GridBuilder } from './grid.builder';

@Component({
  selector: 'app-playground-grid-builder',
  templateUrl: './playground-grid-builder.component.html',
  styleUrls: ['./playground-grid-builder.component.scss']
})
export class PlaygroundGridBuilderComponent implements OnInit {
  public grid: Grid<Individual>;
  private _searchText: string;

  public constructor(
    private gridBuilder: GridBuilderService<Individual>) {
  }

  public addRowClicked(): void {
    const ind = new Individual();
    ind.lastName = 'Lannister';
    ind.firstName = 'Tyrion';
    ind.id = 'z1324';
    this.grid.entries.push(ind);
  }

  public changeAllClicked(): void {
    this.grid.entries.forEach(f => {
      f.lastName = f.lastName + ' Updated!';
    });
  }

  public changePropertyClicked(): void {
    this.grid.entries[0].firstName = this.grid.entries[0].firstName + '2';
  }

  public get searchText(): string {
    return this._searchText;
  }

  public ngOnInit() {
    this.grid = GridBuilder.buildGrid(this.gridBuilder, this.getGridRowStyle.bind(this));
    const individuals = Individual.createSome();
    this.grid.initializeEntries(individuals);
  }

  public removeRowClicked(): void {
    this.grid.entries.splice(0, 1);
  }

  public set searchText(value: string) {
    this._searchText = value.toLowerCase();
    this.grid.filterEntries(entry => this.filterEntry(entry));
  }

  private filterEntry(entry: Individual): boolean {
    if (entry.firstName!.toLocaleLowerCase().indexOf(this._searchText) > -1) {
      return true;
    }

    if (entry.lastName!.toLocaleLowerCase().indexOf(this._searchText) > -1) {
      return true;
    }

    return false;
  }

  private getGridRowStyle(row: RowStyleObject<Individual>): any {
    if (row.data.lastName === 'Lannister') {
      return { background: 'orange' };
    }

    return undefined;
  }
}
