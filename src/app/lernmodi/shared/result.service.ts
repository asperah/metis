import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  resultMultiSingle: [String[]]=[[]];
  resultFillIn: [String[]]=[[]];
  questionsall: Question[];
  resultAuswertung: String[];
  correctResults: number;
  falseResults: number;
  uncheckedResults: number;


  constructor() { }

submitResults(multisingle, fillin, questions) {
  this.resultMultiSingle = multisingle;
  this.resultFillIn = fillin;
  this. questionsall = questions;
  this.correctResults = 0;
  this.falseResults = 0;
  this.uncheckedResults = 0;
// in lernmodis packen
  for(let i=0;this.questionsall.length > i; i++){
    if (this.questionsall[i].qType==3){
      for(let a=0; this.resultFillIn[i].length > a; a++){
        if(this.questionsall[i].correctAnswer[a]== this.resultFillIn[i].values[0]){
          this.correctResults++;
          break;
        }
        else if(this.resultFillIn[i].values[0] == 0){
          this.uncheckedResults++;
        }else{
          this.falseResults++;
        }        
      }
    }else{
      for(let a=0; this.resultMultiSingle[i].length > a; a++){
        if(this.questionsall[i].correctAnswer[a]== this.resultMultiSingle[i].values[a]){
          this.correctResults++;
          break;
        }
        else if(this.resultMultiSingle[i].values[a] == 0){
          this.uncheckedResults++;
        }else{
          this.falseResults++;
        }        
      }

    }
  }
  console.log(this.correctResults);
  console.log(this.falseResults);
  console.log(this.uncheckedResults);
  return(this.correctResults)
}

// getResults(){
//   return this.resultAuswertung;
// }

}

