import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector can be used as html element, attribute, class
  // but mostly we use it as an html element 
  // Every component has a view template, whenever we use the tag as an html element, the view template associated
  // will be rendered
  templateUrl: './app.component.html',
  // the view template is specified through the templateURL
  // content of view template is rendered
  //  OR the template property
  // template:'',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_course';
}
