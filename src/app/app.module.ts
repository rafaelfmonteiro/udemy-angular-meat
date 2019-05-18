import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {ApplicationErrorHandle} from './app.error-handler'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
//import { RestaurantsService } from './restaurants/restaurants.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import {SharedModule} from './shared/shared.mudule';
import {SnackbarComponent} from './shared/messages/snackbar/snackbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    SnackbarComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy:PreloadAllModules})
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: ApplicationErrorHandle}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
