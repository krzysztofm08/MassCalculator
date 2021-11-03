import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rod',
  templateUrl: './rod.component.html',
  styleUrls: ['./rod.component.css']
})
export class RodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rodOutputWeightValue: string= "";
  messageColor: boolean=false;

  rodButtonClicked(
    rodInputDiameter: string,
    rodInputLength: string ) {

    let density = 0.00000785;
    let calculatedRodMass =
      (Math.PI * Math.pow(parseFloat(rodInputDiameter)/2, 2) )*
      parseFloat(rodInputLength) * 
      density;
    if (calculatedRodMass !== null && calculatedRodMass !== undefined && calculatedRodMass > 0) {
    this.rodOutputWeightValue = ""+ calculatedRodMass.toFixed(2);
    this.messageColor = true; }
    else {
    this.rodOutputWeightValue = "Type correct values" ;
    this.messageColor = false; }
  }

}
