import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
public users = [];
public products = [];
public isAdmin:boolean;
  constructor() {
    this.users = [
      {
        "_id": "5cc49e3f74be7ff8d11bb34b",
        "index": 0,
        "isAdmin": true,
        "balance": "$3,049.41",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Humphrey House",
        "username": "admin",
        "password": "admin",
        "gender": "female",
        "company": "PROXSOFT",
        "email": "stephaniewilliam@proxsoft.com",
        "phone": "+1 (814) 550-2407",
        "address": "142 Tillary Street, Makena, Michigan, 5991",
        "registered": "2018-08-04T10:19:18 -06:-30",
        "greeting": "Hello, Humphrey House! You have 10 unread messages.",
        "favoriteFruit": "banana"
      },
      {
        "_id": "5cc49e3fd9dcbfdfaf5fa2ad",
        "index": 1,
        "isAdmin": false,
        "balance": "$1,945.34",
        "picture": "http://placehold.it/32x32",
        "age": 35,
        "name": "Cristina Collier",
        "username": "user",
        "password": "user",
        "gender": "male",
        "company": "COGENTRY",
        "email": "austinrandolph@cogentry.com",
        "phone": "+1 (925) 517-2890",
        "address": "518 Kossuth Place, Garfield, Iowa, 8364",
        "registered": "2016-04-02T11:04:59 -06:-30",
        "greeting": "Hello, Cristina Collier! You have 9 unread messages.",
        "favoriteFruit": "apple"
      },
      {
        "_id": "5cc49e3f7e49f1e66a5856e8",
        "index": 2,
        "isAdmin": false,
        "balance": "$1,703.23",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Boyer Miller",
        "username": "Harriet_Mcleod",
        "password": "Bishop@2",
        "gender": "female",
        "company": "ANDERSHUN",
        "email": "harrietbishop@andershun.com",
        "phone": "+1 (857) 455-2427",
        "address": "287 Sapphire Street, Hanover, New York, 4098",
        "registered": "2015-06-27T09:10:24 -06:-30",
        "greeting": "Hello, Boyer Miller! You have 4 unread messages.",
        "favoriteFruit": "banana"
      }
    ]

    this.products = [
      {
        "productId":"pi0",
        "productName":"Sky Bags",
        "prize":"2000",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951265358.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951265358.png",
        "title": "best of best bags",
        "detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze für ein langes und glückliches Leben benötigt."
      },
      
      {
        "productId":"pi1",
        "productName":"Roadster",
        "prize":"1500",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259098.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951259098.png",
        "title": "for the road trips",
        "detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt. Deshalb ist Whiskas® 1+ zu 100% komplett und ausgewogen, mit einem optimalen Verhältnis an Vitaminen und Mineralien, damit Sie Ihrer Katze die bestmögliche Fürsorge zukommen lassen können. Unsere Mahlzeiten bieten alles, was Ihre Katze"
      },
      
      {
        "productId":"pi2",
        "productName":"Blazzer",
        "prize":"3500",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259289.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951259289.png",
        "title": "worth It",
        "detail":"Wir von Whiskas® verstehen, was ihre Katze von Natur aus braucht und liebt. Indoor Katzen können weniger aktiv sein als Outdoor Katzen. Deshalb wurde Whiskas® Indoor mit hochwertigen Inhaltsstoffen entwickelt."
      },
      {
        "productId":"pi3",
        "productName":"pepe Jeans",
        "prize":"7000",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259470.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951259470.png",
        "title": "non tearable",
        "detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt.Im Laufe der Zeit ändern sich die Ernährungsbedürfnisse Ihrer Katze. Deshalb wurde Whiskas® 7+ speziell mit den richtigen Gehalt an Nährstoffen entwickelt, um die Vitalität Ihrer Katze zu bewahren und Ihnen zu ermöglichen Ihr die bestmögliche Fürsorge zukommen lassen zu können."
      },
      {
        "productId":"pi4",
        "productName":"HP Laptop",
        "prize":"750000",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951265310.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951265310.png",
        "title": "Better is the Best",
        "detail":"Wir von Whiskas® verstehen was Ihr Kätzchen von Natur aus braucht und liebt. Deshalb enthält Whiskas® 2-12 Monate alle, für die gesunde Entwicklung Ihres Kätzchens notwendigen Nährstoffe. Und es enthält leckere, mit Milch gefüllte Knackits®, welche Ihr."
      },
      
      {
        "productId":"pi6",
        "productName":"Samsung i10",
        "prize":"50000",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259289.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951259289.png",
        "title": "the new Samsung",
        "detail":"Wir von Whiskas® verstehen, was ihre Katze von Natur aus braucht und liebt. Indoor Katzen können weniger aktiv sein als Outdoor Katzen. Deshalb wurde Whiskas® Indoor mit hochwertigen Inhaltsstoffen entwickelt."
      },
      {
        "productId":"pi7",
        "productName":"i phone 7",
        "prize":"100000",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951259470.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951259470.png",
        "title": "the new i7 for next Gen",
        "detail":"Wir von Whiskas® verstehen was Ihre Katze von Natur aus braucht und liebt.Im Laufe der Zeit ändern sich die Ernährungsbedürfnisse Ihrer Katze. Deshalb wurde Whiskas® 7+ speziell mit den richtigen Gehalt an Nährstoffen entwickelt, um die Vitalität Ihrer Katze zu bewahren und Ihnen zu ermöglichen Ihr die bestmögliche Fürsorge zukommen lassen zu können."
      },
      {
        "productId":"pi8",
        "productName":"Bags",
        "prize":"3500",
        "thumbImg": "https://www.whiskas.de/content/img/product/thumb/5900951265310.png",
        "detailImg": "https://www.whiskas.de/content/img/product/detail/5900951265310.png",
        "title": "Bags are easy to wash",
        "detail":"Wir von Whiskas® verstehen was Ihr Kätzchen von Natur aus braucht und liebt. Deshalb enthält Whiskas® 2-12 Monate alle, für die gesunde Entwicklung Ihres Kätzchens notwendigen Nährstoffe. Und es enthält leckere, mit Milch gefüllte Knackits®, welche Ihr."
      }
    ]


   }
}
