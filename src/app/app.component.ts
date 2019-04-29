import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  public home:boolean;
  constructor(private router:Router, private location:Location,){}
  ngOnInit(){

  }
  ngAfterViewInit(){
    let loc :string = this.location.path().toString();
    if( loc === "")
    this.home = true;
    
  }
  
  title = 'e-shopping';
  loginPage(){
    this.router.navigate(['/login']);
    this.home = false;
  }


}
