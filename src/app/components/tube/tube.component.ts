import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tube',
  templateUrl: './tube.component.html',
  styleUrls: ['./tube.component.css']
})
export class TubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tubeOutputWeightValue: string= "";
  messageColor: boolean=false;

  tubeButtonClicked(
    tubeInputThickness: string,
    tubeInputDiameter: string,
    tubeInputLength: string ) {

    let density = 0.00000785;
    let calculatedTubeMass =
      (
        (Math.PI * Math.pow(parseFloat(tubeInputDiameter)/2, 2) ) -
        (Math.PI * Math.pow(parseFloat(tubeInputDiameter)/2 -  parseFloat(tubeInputThickness), 2) )
      ) *
      parseFloat(tubeInputLength) * 
      density;
    if (calculatedTubeMass !== null && calculatedTubeMass !== undefined && calculatedTubeMass > 0) {
    this.tubeOutputWeightValue = ""+ calculatedTubeMass.toFixed(2);
    this.messageColor = true; }
    else {
    this.tubeOutputWeightValue = "Type correct values" ;
    this.messageColor = false; }
  }

}
