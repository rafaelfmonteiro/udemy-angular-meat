import {Injectable} from '@angular/core'

import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

import {NotificationService} from '../../shared/messages/notification.service'

@Injectable()
export class ShoppingCartService{
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService){}

    clear() {
      this.items = []
    }

    addItem(item: MenuItem) {
      let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
      if (foundItem) {
        console.log(`Adicionado exitente ${foundItem.menuItem.name} (${foundItem.quantity+1})`)
        this.increaseQty(foundItem)
      } else {
        console.log(`Adicionado item ao carrinho ${item.name} - tamanho da lista de carrinho: ${this.items.length}`)
        this.items.push(new CartItem(item))
      }

      this.notificationService.notify(`Você adicionou um item ${item.name}`)
    }

    increaseQty(item: CartItem){
       item.quantity = item.quantity+1
    }

    decreasyQty(item: CartItem){
      item.quantity = item.quantity-1
      if (item.quantity===0){
        this.removeItem(item)
      }
    }

    removeItem(item: CartItem) {
      this.items.splice(this.items.indexOf(item), 1)
      this.notificationService.notify(`Você removeu um item ${item.menuItem.name}`)
    }

    total(): number {
      return this.items
        .map(item => item.value()).reduce((prev, value)=> prev+value, 0)
    }
}
