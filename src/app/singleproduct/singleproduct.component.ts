import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent implements OnInit {
listData
prod
id:String
  constructor(private product:ProductService,private route: ActivatedRoute,private router: Router) {
    this.product.listProduct().subscribe((data)=>{
      this.listData=data;
      // console.log(this.listData);
    })
   }

  ngOnInit(): void {
    this.prod = this.route.params.subscribe(params => {
      this.id = params['id']
      });
      //   
  }

}
