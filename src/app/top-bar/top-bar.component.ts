import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  count: number;

  constructor(private _route: ActivatedRoute, private _cartService: CartService) { 

  }

  ngOnInit() {
    this._cartService.count.subscribe(c => {
      this.count = c;
    });
  }

}