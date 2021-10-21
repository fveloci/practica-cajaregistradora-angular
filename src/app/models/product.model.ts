

export class Product {

  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;


  constructor (name: string = "", description: string = "", price: number = 0, image: string = "", quantity: number = 0) {
    this.name = name;
    this.description = description
    this.price = price
    this.image = image
    this.quantity = quantity
  }
}
