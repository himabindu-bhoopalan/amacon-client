import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ecategory',
  templateUrl: './ecategory.component.html',
  styleUrls: ['./ecategory.component.css']
})
export class EcategoryComponent implements OnInit {
  listData
  sub
  name:any
  constructor(private product:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']});
      
      this.product.listcategory('Electronics').subscribe((data)=>{
        this.listData=data;
         
        })
         
     
  
  }

}
