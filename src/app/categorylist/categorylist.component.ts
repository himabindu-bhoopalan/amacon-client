import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  listData
  sub
  name:string
  constructor(private product:ProductService,private route:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { //getting the paramter passed in the url
      this.name = params['name']});
      this.product.listcategory('Women').subscribe((data)=>{
        this.listData=data;//fetching the data 
        })
        
  }

  
}
