import { GridOptions } from 'ag-grid';

import { IMaybe, Maybe } from 'app/infrastructure/language-extensions/maybes';
import { ISubscribableEvent } from 'app/infrastructure/language-extensions/events';
import { OneArgFunc } from 'app/infrastructure/types/callbacks';

import { GridEventsServant, GridProxyServant } from './servants';

export class Grid<TModel extends object> {
  private readonly _eventsServant = new GridEventsServant<TModel>();
  private readonly _proxyServant = new GridProxyServant<TModel>();

  public constructor(public gridOptions: GridOptions) {
    this._eventsServant.initialize(gridOptions);
    this._proxyServant.initialize(gridOptions);
  }

  public filterEntries(filterCallback: OneArgFunc<TModel, boolean>): void {
    const filteredEntries = this._proxyServant.allEntries.filter(entry => {
      return filterCallback(entry);
    });

    this._proxyServant.alignEntries(this._proxyServant.entries, filteredEntries);
  }

  public initializeEntries(entries: TModel[]): void {
    this._proxyServant.initializeEntries(entries);
  }

  public get entries(): TModel[] {
    return this._proxyServant.entries;
  }

  public get hasItemsSelected(): boolean {
    return this.gridOptions.api!.getSelectedNodes().length > 0;
  }

  public get onCellDoubleClicked(): ISubscribableEvent<TModel> {
    return this._eventsServant.onCellDoubleClicked;
  }

  public get selectedItem(): IMaybe<TModel> {
    const selectedNodes = this.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <TModel>selectedNodes[0].data;
      return Maybe.CreateSome(entry);
    }

    return Maybe.CreateNone();
  }
}
