import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from 'src/app/users.service';

@Component({
  selector: 'app-product-fuction',
  templateUrl: './product-fuction.component.html',
  styleUrls: ['./product-fuction.component.css']
})
export class ProductFuctionComponent implements OnInit {
public productId:string;
public productName:number;
public prize:string;
public users= [];
public products =[];
public routeData;
public isAddProduct:boolean;
  constructor(private usersService : UsersService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.users = this.usersService.users;
    this.products = this.usersService.products;
    this.routeData = this.activatedRoute
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.productId = params['productId']? params['productId']:'';
        this.productName = params['productName']?params['productName']:'';
        this.prize = params['prize']?params['prize'] :'';
        if(params['type']=='add'){
          this.isAddProduct = true;
        }
        else
        this.isAddProduct = false;
      });


    
  }
  addProductToList(){
   
    let data = {
      productId:"pi"+this.usersService.products.length,
      productName:this.productName,
      prize:this.prize,
      thumbImg: "https://www.whiskas.de/content/img/product/thumb/5900951265358.png",
      detailImg: "https://www.whiskas.de/content/img/product/detail/5900951265358.png",
      title: "1+ Mit Huhn 800g",
      detail:"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze für ein langes und glückliches Leben benötigt."
    };
    this.usersService.products.push(data);
    
    
    this.router.navigate(['/productPage']);
  }
  change(){
    for(let i=0;i< this.products.length;i++){
      if(this.productId == this.products[i].productId){
        this.usersService.products[i].productName = this.productName;
        this.usersService.products[i].prize = this.prize;
        break;
      }
    }
    this.router.navigate(['/productPage']);

  }

}
