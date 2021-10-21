import { Product } from './../../models/product.model';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cash-register',
  templateUrl: './cash-register.component.html',
  styleUrls: ['./cash-register.component.css']
})
export class CashRegisterComponent implements OnInit {

  @Input() list: Product[]
  total: number = 0

  constructor() {
    this.list = new Array<Product>()
  }

  ngOnInit(): void {
  }

  calculateTotal(){
    let result = 0;
    this.list.forEach(product => {
      result+= (product.price*product.quantity)
    })
    return result;
  }

  onClickDelete(index: number){
    if(this.list[index].quantity === 1){
      this.list.splice(index, 1)
    }else{
      this.list[index].quantity--
    }

  }
}
