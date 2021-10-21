import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cash-register-item',
  templateUrl: './cash-register-item.component.html',
  styleUrls: ['./cash-register-item.component.css']
})
export class CashRegisterItemComponent implements OnInit {

  @Input() product: Product
  @Output() deleteProduct: EventEmitter<string>;
  constructor() {
    this.product = new Product()
    this.deleteProduct = new EventEmitter()
  }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.deleteProduct.emit('Delete product')
  }

}
