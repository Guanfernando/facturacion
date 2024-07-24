import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-items.component.html',
  
})
export class FormItemsComponent {

  @Output() addItemEventEmitter = new EventEmitter;
  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity:''
  }

  onSubmit(itemForm: NgForm):void {
    this.addItemEventEmitter.emit({id: this.counterId, ...this.item});
    this.counterId++;
    
    this.item = {
      product: '',
      price: '',
      quantity:''
    };
    itemForm.reset();
    itemForm.resetForm();
    
  }

}
