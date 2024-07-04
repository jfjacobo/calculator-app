import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator App';
  //Create and initialize the variables
  valueA: number = 0;
  valueB: number = 0;
  result: number = 0;

  //Create the sum method
  sum():void{
    this.result = this.valueA + this.valueB;
  }

  //Create the rest method
  rest():void{
    this.result = this.valueA - this.valueB;
  }

  //Create the multiply method
  multiply():void{
    this.result = this.valueA * this.valueB;
  }

  //Create the Divide method
  divide():void{
    this.result = this.valueA / this.valueB;
  }
}
