import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import {Router} from '@angular/router'
import {RadioOption} from '../shared/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order,OrderItem} from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery:number = 8

  paymentOptions : RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Crédito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ]

  constructor(private orderService: OrderService,
        private router: Router,
        private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOptions: this.formBuilder.control('')
    })
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreasyQty(item: CartItem){
    this.orderService.decreasyQty(item)
  }

  remove(item: CartItem){
    this.orderService.removeItem(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkOrder(order).subscribe( (orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear();
    })
    console.log(order)
  }

}
