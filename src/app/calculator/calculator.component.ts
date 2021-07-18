import {Component, OnInit} from '@angular/core';
import {Calculator} from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  cal: Calculator = {
    firstNumber: 0,
    secondNumber: 0,
    ope: '+'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
