import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
nome = "obersong"


  adicionar(){
    console.log("salut"+ this.nome);
    const number = Math.round(Math.random()* 100);
    this.nome='obed' +number
    
  }

 
 











}
