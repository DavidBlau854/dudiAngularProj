import { Item } from './item.interface';
import { Component } from '@angular/core';
import { CartService } from "./cart.service";
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  shoppingCart: Item[] = [];
  items: Item[] = [];


  constructor(private cartService: CartService, private postService: PostsService) {
    this.postService.get().subscribe((results) => this.items = results)
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }

  isInCart(item: Item): boolean {
    return this.cartService.isInCart(item);
  }

  removeFromCart(item: Item): void {
    this.cartService.removeFromCart(item);
  }


}



