import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  userForm: any;
  listData
  newid
  
  constructor(private productservice:ProductService) { 
    this.productservice.listProduct().subscribe((data) => {
      this.listData=data;
    })
    this.userForm = new FormGroup({
      'name': new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }
  delData(){
    let count=0;
    for(let i=0;i<this.listData.length;i++){
        // console.log(this.userForm.value.id);
        if(this.userForm.value.name==this.listData[i].name){
          count++;
          this.userForm.value.id=this.listData[i]._id;
          // console.log(this.userForm.value.id);
          
        }
       
    }
    if(count==0){
      alert('Product not found');
    }
    //doubt why am i not able to pass a new variable into delProduct ..only userForm is being allowed???
    console.log('inside delData method'+this.userForm.value.name+this.userForm.value.id);
        this.productservice.delProduct(this.userForm.value.id).subscribe((data)=>{
          alert(this.userForm.value.name+' has been deleted');
          console.log('status:'+data.status+' '+'message:'+data.message);
        })
  }
}
