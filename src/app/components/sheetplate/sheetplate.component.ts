import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheetplate',
  templateUrl: './sheetplate.component.html',
  styleUrls: ['./sheetplate.component.css']
})
export class SheetplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sheetPlateOutputWeightValue: string= "";
  messageColor: boolean=false;

  sheetPlateButtonClicked(
    sheetPlateInputThickness: string,
    sheetPlateInputWidth: string,
    sheetPlateInputLength: string ) {

    let density = 0.00000785;
    let calculatedSheetPlateMass = 
      parseFloat(sheetPlateInputThickness) * 
      parseFloat(sheetPlateInputWidth) * 
      parseFloat(sheetPlateInputLength) * 
      density;
    if (calculatedSheetPlateMass !== null && calculatedSheetPlateMass !== undefined && calculatedSheetPlateMass > 0) {
    this.sheetPlateOutputWeightValue = ""+ calculatedSheetPlateMass.toFixed(2);
    this.messageColor = true; }
    else {
    this.sheetPlateOutputWeightValue = "Type correct values" ;
    this.messageColor = false; }
  }

}
