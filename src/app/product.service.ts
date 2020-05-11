import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  listcategory(name):Observable<any>{
    return this.http.get('https://amacon-server.herokuapp.com/category/'+name)
  }
  
  postProduct(data){
   return this.http.post('https://amacon-server.herokuapp.com/addproduct/',data)
  }
  listProduct():Observable<any>{
   return this.http.get('https://amacon-server.herokuapp.com/')
  }
  delProduct(prodid):Observable<any>{  
    return this.http.delete('https://amacon-server.herokuapp.com/del/'+prodid)   
    //always check if the route is correct because i got err because i missed a slash
  }
  updateProduct(data){
    return this.http.put('https://amacon-server.herokuapp.com/update',data)
    
  }
}
