import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrdServiceService } from '../prd-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private route:Router,
    private service:PrdServiceService
  ){}
  
  item=this.service.getCart();
  goPrd(){
    this.route.navigate(['./product']);
  }
  removeFromCart(id:number){
    this.service.removeFromCart(id)
  }
}
