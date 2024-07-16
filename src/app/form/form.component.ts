import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  valueA: number = 0;
  valueB: number = 0;

  //Create the sum method
  sum():void{
    //this.result = this.valueA + this.valueB;
  }

  //Create the rest method
  rest():void{
    //this.result = this.valueA - this.valueB;
  }

  //Create the multiply method
  multiply():void{
    //this.result = this.valueA * this.valueB;
  }

  //Create the Divide method
  divide():void{
    //this.result = this.valueA / this.valueB;
  }
}
