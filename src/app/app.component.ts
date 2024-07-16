import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator App';
  //Create and initialize the variables
 
  resultFather: number = 0;

  processResult(result: number){
    this.resultFather = result;
  }
  
}
