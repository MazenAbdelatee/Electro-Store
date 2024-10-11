import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrdServiceService } from '../prd-service.service';

@Component({
  selector: 'app-products',  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(public route:Router,private prdService:PrdServiceService){}
  filteredData:any[]=[]
  categorylist:string[]=["Phones",'Laptops','processor','Monitors','PC Accessories',"Graphic Cards"];
  prdData=this.prdService.prdata;
  
  filter(event:any){
    if(event.target.value==="Most Selling"){
      this.filteredData=this.prdData.filter(el=>{
        return el.rating>=4.9;
      });
    }else{
      this.filteredData=this.prdData.filter((el)=>{
        return el.category== event.target.value;
      })
    }
  }
  ngOnInit(){
    this.filteredData=this.prdData.filter(el=>{
      return el.rating>=4.9;
    });
  }
  getDetail(data:any){
    this.route.navigate(['product/',data.id])
  }
}
