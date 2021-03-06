import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Item} from "../item.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {

  @Input() item: Item | null = null;
  @Input() isInCart: boolean = false;

  @Output() addToCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();
  @Output() removeFromCart:EventEmitter<Item | null> = new EventEmitter<Item | null>();



  addToCartClicked(){
    this.addToCart.emit(this.item);
  }

  removeFromCartClicked() {
    this.removeFromCart.emit(this.item);
  }



}
