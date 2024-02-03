import { Component } from '@angular/core';
import { Product } from "../interface";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


// let response:any = await fetch('https://fakestoreapi.com/products');
// let prodArr:any = await response.json();

export class AboutComponent {

  // constructor(private http: HttpClient){

  // }
  // products = prodArr;

  product: Product = {
    imgPath: "../assets/img/meal-6.jpg",
    title:"Kufta",
    desc:"Kufta is a family of meatball or meatloaf dishes found in Balkan, Middle Eastern, North African and South Caucasian.",
    price:50
  }
  numSequence(n: number): Array<number> { 
    return Array(n);}
}
