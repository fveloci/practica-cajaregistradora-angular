import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() product: Product;
  @Output() selectedProduct: EventEmitter<Product>;

  constructor() {
    this.product = new Product();
    this.selectedProduct = new EventEmitter()
  }

  ngOnInit(): void {
  }

  addProductToCart(){
    this.selectedProduct.emit(this.product)
  }

}
