import { GridOptions } from 'ag-grid';
import { SimpleEvent, ISubscribableEvent } from 'app/infrastructure/language-extensions/events';

export class GridEventsServant<TModel> {
  private readonly _cellDoubleClickEvent = new SimpleEvent<TModel>();

  public get onCellDoubleClicked(): ISubscribableEvent<TModel> {
    return this._cellDoubleClickEvent;
  }

  public initialize(gridOptions: GridOptions): void {
    gridOptions.onCellDoubleClicked = ($event) => {
      const entry = <TModel>$event.data;
      this._cellDoubleClickEvent.onEvent(entry);
    };
  }
}
