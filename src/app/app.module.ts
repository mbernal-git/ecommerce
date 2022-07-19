import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { HeroComponent } from './hero/hero.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { BlogService } from './blog.service';
import { NewArrivalsDetailsComponent } from './new-arrivals-details/new-arrivals-details.component';
import { ProductsService } from './products.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewArrivalsListComponent } from './new-arrivals-list/new-arrivals-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'test', component: ProductListComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'products/:productId', component: ProductDetailsComponent},
      { path: 'about', component: AboutComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'cart', component: CartComponent},
      { path: 'shipping', component: ShippingComponent},
      { path: 'products/new-arrivals/:productId', component: NewArrivalsDetailsComponent },
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    HeroComponent,
    NewArrivalsComponent,
    RecentPostsComponent,
    NewArrivalsDetailsComponent,
    PageNotFoundComponent,
    NewArrivalsListComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, BlogService, ProductsService]
})
export class AppModule { }