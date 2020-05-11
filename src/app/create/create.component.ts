import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userForm
  
  category:any=['Women','Groceries','Electronics']
  constructor(private productService:ProductService) {
    
    this.userForm = new FormGroup({
      'name':new FormControl('Enter productname'),
      'id':new FormControl('give a unique id'),
      'category':new FormControl(),
      'price':new FormControl('899'),
      'image':new FormControl('copy image address'),
      'description':new FormControl('')         
    })
   }

  ngOnInit(): void {

    
  }
  changeCity(e) {
    this.category.setValue(e.target.value, {
      onlySelf: true
    })
  }
  sendData() {
    console.log(this.userForm.value);
    this.productService.postProduct(this.userForm.value).subscribe((productdata)=>{
      console.log("data added id is"+productdata);
    })
  }

}
