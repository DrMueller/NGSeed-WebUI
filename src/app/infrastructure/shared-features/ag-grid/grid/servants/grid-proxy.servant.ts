import { GridOptions } from 'ag-grid';

import { ArrayChangeType } from './array-change-type.enum';
import { ObservableArrayProxyHandler } from './observable-array-proxy.handler';
import { ObversableProxyHandler } from './obversable-proxy.handler';

export class GridProxyServant<TModel extends object> {
  public allEntries: TModel[];
  public entries: TModel[];

  private _isGridReady: boolean;
  private _gridOptions: GridOptions;

  public alignEntries(originalArray: TModel[], newEntries: TModel[]): void {
    originalArray.splice(0, originalArray.length);
    originalArray.push(...newEntries);
  }

  public initialize(gridOptions: GridOptions): void {
    this._gridOptions = gridOptions;
    gridOptions.onGridReady = () => this._isGridReady = true;
    const proxyHandler = new ObservableArrayProxyHandler<TModel[]>(this.onModelsArrayChanged.bind(this));
    this.entries = new Proxy(new Array<TModel>(), proxyHandler);
    this.allEntries = new Proxy(new Array<TModel>(), proxyHandler);
  }

  public initializeEntries(entries: TModel[]): void {
    this.alignEntries(this.allEntries, entries);
    this.alignEntries(this.entries, entries);
  }

  public onModelChanged(_target: TModel, _p: PropertyKey, _value: any, _receiver: any): void {
    this.updateRowDataWhenGridReady();
  }

  private createProxy(entry: TModel): TModel {
    const entryProxyHandler = new ObversableProxyHandler<TModel>(this.onModelChanged.bind(this));
    const proxy = new Proxy(entry, entryProxyHandler);
    return proxy;
  }

  private onModelsArrayChanged(_: TModel, p: PropertyKey, value: any, changeType: ArrayChangeType): void {
    if (changeType === ArrayChangeType.EntryInserted) {
      this.entries[p] = this.createProxy(value);
    }

    this.updateRowDataWhenGridReady();
  }

  private updateRowDataWhenGridReady(): void {
    if (this._isGridReady) {
      this._gridOptions.api!.setRowData(this.entries);
    } else {
      const interval = setInterval(() => {
        if (this._isGridReady) {
          clearInterval(interval);
          this._gridOptions.api!.setRowData(this.entries);
        }
      }, 100);
    }
  }
}
