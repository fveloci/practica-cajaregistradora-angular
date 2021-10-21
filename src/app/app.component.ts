import { Product } from './models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caja-registradora';

  @Input() productToAdd: Product;
  food: Product[] = [
    new Product("Pizza","Pizza mozarella", 500,"https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png"),
    new Product("Milanesa","Milanesa de carne", 300,"https://www.filo.news/__export/1588698815967/sites/claro/img/2020/05/05/milanesa.jpg_554688468.jpg"),
    new Product("Empanadas de carne x12","Empanadas de carne horneadas", 350,"https://static.onecms.io/wp-content/uploads/sites/21/2020/11/16/GettyImages-1158987157-2000.jpg"),
  ]
  beverages: Product[] = [
    new Product("Pritty Limon","2l", 90,"https://jumboargentina.vtexassets.com/arquivos/ids/443749/Pritty-Limon-22-L-1-21031.jpg?v=636538352356070000"),
    new Product("Coca-Cola","Bebida sabor cola", 150,"https://www.supermercedes.com.ar/napoles/wp-content/uploads/2020/04/funda_coca_cola_225_litros.jpg"),
  ]

  cashRegister: Product[];

  constructor(){
    this.productToAdd = new Product()
    this.cashRegister = new Array<Product>()
  }

  addProductToCart($event: any){
    const findProduct = this.cashRegister.find(product => product.name == $event.name)
    if(findProduct){
      findProduct.quantity++
    }else {
      $event.quantity = 1
      this.cashRegister.push($event)
    }

  }
}
