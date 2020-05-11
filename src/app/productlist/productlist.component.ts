import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  listData
  constructor(private product:ProductService) { 
    this.product.listProduct().subscribe((data)=>{
      this.listData=data;
      // console.log(this.listData);
    })
  }

  ngOnInit(): void {
  }

}
