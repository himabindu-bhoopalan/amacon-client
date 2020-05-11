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
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name']});
      console.log("inside categorylist.ts"+this.name);
      this.product.listcategory('Women').subscribe((data)=>{
        
        this.listData=data;
        
        console.log(this.listData);
        
        // this.router.navigate(['/category', { id: this.name }]);
        // this.ngOnInit();
        //  this.router.navigate(['category/',this.name]);
        })
        
  }

  
}
