import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operandA: number = 10
  operandB: number = 5
  result: number

  arr: string[] = ['apple', 'banana', 'pineapple'];

  constructor() { }

  ngOnInit() {
  }

  onCalculateBtnClick(){
    this.calculateResult()
    this.operandA = 500;
  }

  onOperandValueChange(operandName: string, value: number){
    this[operandName] = value;
  }

  calculateResult(){
    this.result = this.operandA + this.operandB;
  }

}
