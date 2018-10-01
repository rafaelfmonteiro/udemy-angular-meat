import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service'
import {CartItem} from './cart-item.model'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService : ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    for (let item of this.shoppingCartService.items) {
      console.log(item.menuItem.name);
    }
    console.log(`Capturando itens do carrinho de compras - ${this.shoppingCartService.items.length}`)
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear();
  }

  removeItem(item: any){
    return this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
