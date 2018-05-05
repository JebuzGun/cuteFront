import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/timeout';

@Injectable()
export class CommunicationsProvider {

  private readonly url : string = 'http://35.231.143.39:3000/api/';
  products:any;
  sales:any;

  constructor(public http: HttpClient) {
  }
  getProducts(){
    return new Promise((resolve,reject) => {
      this.http.get(this.url+'product').timeout(5000).subscribe( (res:any) => {
        if(res.ok){
          this.products = res.productos;
          resolve(res.productos);
        }else{
          reject(res.mensaje);
        }
      });
    }).catch((err)=> {
      console.log(err);
    });
  }
  getSales(){
    return new Promise ((resolve,reject)=>{
      this.http.get(this.url+'sale').timeout(5000).subscribe( (res:any) => {
        let ok:boolean = res.ok;
        if(ok){
          this.sales = res.ventas;
          resolve(res);
        }else{
          reject(res);
        }
      });
    }).catch((err)=> {
      console.log(err);
    });
  }
  makeSale(sale:any){
    return new Promise((resolve,reject)=>{
      this.http.post(this.url+'sale', sale).timeout(5000).subscribe((res:any)=>{
        if(res.ok){
          resolve(res);
        }else{
          reject(res.mensaje);
        }
      })
    }).catch(err=> console.log(err));
  }
  addProduct(product:any){

  }
}
