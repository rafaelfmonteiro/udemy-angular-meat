import {Injectable} from "@angular/core"
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

import {MEAT_API} from '../app.api'
import {LoginService} from '../security/login/login.service'

@Injectable()
export class OrderService {

  constructor(private cartService : ShoppingCartService,
              private http: HttpClient,
              private loginService: LoginService){}

  itemsValue(): number {
    return this.cartService.total();
  }

  cartItems(): CartItem[] {
      return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreasyQty(item: CartItem){
    this.cartService.decreasyQty(item)
  }

  removeItem(item : CartItem){
    this.cartService.removeItem(item)
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string>{
    let headers = new HttpHeaders()
    if (this.loginService.isLoggedIn){
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    }
    return this.http.post<Order>(`${MEAT_API}/orders`, order)
                    .map(order => order.id)
  }

}
