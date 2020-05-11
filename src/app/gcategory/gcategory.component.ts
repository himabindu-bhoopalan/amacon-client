import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gcategory',
  templateUrl: './gcategory.component.html',
  styleUrls: ['./gcategory.component.css']
})
export class GcategoryComponent implements OnInit {
  name:string
  sub
  listData
  constructor(private product:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']});
      this.product.listcategory('Groceries').subscribe((data)=>{
        
        this.listData=data;
        
        })
  }

}
