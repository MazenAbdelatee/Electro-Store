import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PrdServiceService } from '../prd-service.service';
import { PrdInfo } from '../prd-info';

@Component({
  selector: 'app-prdetail',
  templateUrl: './prdetail.component.html',
  styleUrl: './prdetail.component.css'
})
export class PrdetailComponent implements OnInit {
  constructor(public activatedRote:ActivatedRoute,
    public DetailSer:PrdServiceService,
    public route:Router
  ){}
  recPrdId:number=0;
  prd:any=[];
  value:number=1;
  cart:any[]=[];
  unitPrice!:number;
  totalPrice!:number;

  ngOnInit(){
    this.recPrdId=Number(this.activatedRote.snapshot.paramMap.get('id'))
    this.prd=this.DetailSer.getCat(this.recPrdId);
    if(!this.prd){
      this.route.navigate(['/not-found']);
    }
    this.unitPrice=this.prd.price;
    this.totalPrice=this.unitPrice*this.value;
    
  }
  decrecequantity(){
    if(this.value>1){
      this.value--;
      this.totalPrice=this.unitPrice*this.value
    }
  }
  increcequantity(){
    if(this.value<this.prd.Quantity){
      this.value++;
      this.totalPrice=this.unitPrice*this.value
    }
  }
  addToCart() {
    if (this.prd) {
      this.DetailSer.addToCart(this.prd)
    }
  }
}
