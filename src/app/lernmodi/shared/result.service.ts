import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  resultMultiSingle: [String,String[]];
  resultFillIn: [String,String[]];
  questionsall: Question[];
  resultAuswertung: String[];
  correctResults: number;
  falseResults: number;
  uncheckedResults: number;
  tokenCheck: boolean;


  constructor() { }

submitResults(multisingle, fillin, questions) {
  this.resultMultiSingle = multisingle;
  this.resultFillIn = fillin;
  this. questionsall = questions;
  this.correctResults = 0;
  this.falseResults = 0;
  this.uncheckedResults = 0;


  for(let i=0;this.questionsall.length > i; i++){
    if (this.questionsall[i].qType==3){

      if(this.resultFillIn[i][0] == '0'){
        this.uncheckedResults++;
      }
      else{

          for(let a=0; this.resultFillIn[i].length > a; a++){
            if(this.questionsall[i].correctAnswer[a] !== this.resultFillIn[i][0]){
              this.tokenCheck= false;
            }
            else{
              this.tokenCheck= true;
              break;
            }        
          }

          if(this.tokenCheck==true){
            this.correctResults++;
          }else{
            this.falseResults++;
          }
      }  

    }
    else{

      if (this.isNull(i)){
        this.uncheckedResults++;
      }else{

        for(let a=0; this.resultMultiSingle[i].length > a; a++){
          if(this.questionsall[i].correctAnswer[a] !== this.resultMultiSingle[i][a]){
            this.tokenCheck= false;
          }
          else{
            this.tokenCheck= true;
            break;
          }        
        }
        
        if(this.tokenCheck==true){
          this.correctResults++;
        }else{
          this.falseResults++;
        }



        // for(let a=0; this.resultMultiSingle[i].length > a; a++){
        //   if(this.questionsall[i].correctAnswer[a]== this.resultMultiSingle[i][a]){
        //     this.correctResults++;
        //     break;
        //   }
        //   else if(this.resultMultiSingle[i][a] == '0'){
        //     this.uncheckedResults++;
        //   }
        //   else{
        //     this.falseResults++;
        //   }        
        // }
      }
    }
  }

}


isNull(i) {
  let d = i;
  for (let l = 0, len = this.resultMultiSingle[d][l].length; l < len; l += 1)
    if (this.resultMultiSingle[d][l] !== null)
      return false;
  return true;
}

}

