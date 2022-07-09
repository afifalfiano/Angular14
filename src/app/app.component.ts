import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h2>Meet</h2>`,
  styleUrls: ['./app.component.css']
  // styles: [`h2{color:red;}`]
})
export class AppComponent {
  title = 'gymmb';
  mb:number =20;
  imageUrl="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp";
  save($event:any){
    console.warn("Save button click",$event);
  }
  onDivClick(){
    console.log("Dov click");
  }
}
