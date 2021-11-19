import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'obed kabwe';


  adicionar(){
    console.log('Adicionar:'  + this.nome );
  
    const number = Math.trunc(Math.random()*100) ;
    
    this.nome= "oberson" + number;
  }

 
 











}
