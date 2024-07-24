import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice() : Invoice {
    const total = this.calculateTotal();
    return {...this.invoice, total}
  }

remove(id:number): Invoice{
  this.invoice.item = this.invoice.item.filter(item => item.id !== id)
  const total = this.calculateTotal();
  return {...this.invoice, total};
}

save(item: Item): Invoice{
  this.invoice.item = [...this.invoice.item,item];
  const total = this.calculateTotal();
  return {...this.invoice, total};
}


calculateTotal(){
  return this.invoice.item.reduce((total, item) => total + (item.price * item.quantity), 0)

}
}
