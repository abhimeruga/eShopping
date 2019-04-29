import { Component, OnInit,Inject } from '@angular/core';
import {UsersService} from 'src/app/users.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
public products =[];
public productsTemp =[];
public isAdmin:boolean;

  constructor(private usersService:UsersService,public dialog: MatDialog,private router:Router) { }

  ngOnInit() {
    if(this.usersService.isAdmin)
    this.isAdmin = this.usersService.isAdmin;
    this.products = this.usersService.products;
    this.productsTemp = this.usersService.products;
  }

  goTOEditDeleteProduct(type,product){
    if(type.toLowerCase() == "edit")
    this.router.navigate(['/productEdit'],{ queryParams: { productId: product.productId, productName:product.productName,prize:product.prize  } });
   if(type.toLowerCase() == "delete"){
    for(let i=0;i< this.products.length;i++){
      if(product.productId == this.products[i].productId){
        this.usersService.products.splice(i, 1); 
      }
    }
   }
   
   this.products = this.usersService.products;
  }
  public searchValue:string;
  searchProduct(){
    if(this.searchValue === ""){
      this.products = this.productsTemp;
    }
    else {
      this.usersService.products = this.productsTemp.filter((product)=>{
       return product.productName.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1;
       
});
    }
     if(this.searchValue!="")
this.products = this.usersService.products;
this.searchValue='';

  }

  addProduct(){
    this.router.navigate(['/productEdit'],{ queryParams: { type: 'add' } });
  }
  public productsCart=[];
  public productsCartLength=0;
  public productCartPrize=0;
  addToCart(type,product){
    let totalPrize = 0;
      this.productsCart.push(product);
      this.productsCartLength = this.productsCart.length;
      this.productsCart.forEach(element=>{
        totalPrize = totalPrize + parseInt(element.prize);
      });
      this.productCartPrize = totalPrize;
      this.goTOEditDeleteProduct('delete', product);
  }
  

}
