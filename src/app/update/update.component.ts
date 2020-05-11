import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userForm
  listData
  ProdForm
  category:any=['Women','Groceries','Electronics']
  constructor(private productService:ProductService,private router:Router) { 
    this.productService.listProduct().subscribe((data) => {
      this.listData=data;
    })

    this.ProdForm = new FormGroup({
      'select': new FormControl("", Validators.required),
      })
    this.userForm = new FormGroup({
      'name':new FormControl(''),
      'id':new FormControl('give a unique id'),
      '_id':new FormControl('Object ID-do not modify'),
      'category':new FormControl(),
      'price':new FormControl(),
      'image':new FormControl('copy image address'),
      'description':new FormControl('')         
    })
  }

  ngOnInit(): void {
  }
  selectedproduct:any;
  fill()
  {
    
    this.userForm.get('name').setValue(this.selectedproduct.name);
    this.userForm.get('_id').setValue(this.selectedproduct._id);
    this.userForm.get('id').setValue(this.selectedproduct.id);
    this.userForm.get('category').setValue(this.selectedproduct.category);
    this.userForm.get('price').setValue(this.selectedproduct.price);
    this.userForm.get('image').setValue(this.selectedproduct.image);
    this.userForm.get('description').setValue(this.selectedproduct.description);
  }

  update()
  {
    
    this.productService.updateProduct(this.userForm.value).subscribe((data) => {
      alert(this.userForm.value.name+' item has been updated!')
      this.router.navigate(['/']);
      
    })
  }
}
