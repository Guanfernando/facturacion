import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[app-row-items]',
  standalone: true,
  imports: [],
  templateUrl: './row-items.component.html',
  
})
export class RowItemsComponent {

  @Input() item!: Item;    
  
  @Output() removeEventEmitter:EventEmitter<number> = new EventEmitter();
  onRemove(id:number){
    this.removeEventEmitter.emit(id);
  }

  
}
