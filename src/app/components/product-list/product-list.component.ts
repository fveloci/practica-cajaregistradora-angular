import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() listType: String = "";
  @Input() products: Product[] = [];
  @Output() selectedProduct: EventEmitter<Product>

  constructor() {
    this.selectedProduct = new EventEmitter()
  }

  ngOnInit(): void {
  }

  addProductToCart($event: any){
    this.selectedProduct.emit($event)
  }
}
