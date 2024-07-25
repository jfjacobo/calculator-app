import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  valueA: number ;
  valueB: number ;

  @Output() resultSum = new EventEmitter<number>;
  @Output() resultRest = new EventEmitter<number>;
  @Output() resultMult = new EventEmitter<number>;
  @Output() resultDivide = new EventEmitter<number>;

  //Create the sum method
  sum():void{
    //this.result = this.valueA + this.valueB;
    let result = this.valueA + this.valueB;
    this.resultSum.emit(result);
  }

  //Create the rest method
  rest():void{
    //this.result = this.valueA - this.valueB;
    let result = this.valueA - this.valueB;
    this.resultRest.emit(result);
  }

  //Create the multiply method
  multiply():void{
    //this.result = this.valueA * this.valueB;
    let result = this.valueA * this.valueB;
    this.resultMult.emit(result);
  }

  //Create the Divide method
  divide():void{
    //this.result = this.valueA / this.valueB;
    let result = this.valueA / this.valueB;
    this.resultDivide.emit(result);
  }
}
