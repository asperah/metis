import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  resultMultiSingle: [String,String[]]=[]['0'];
  resultFillIn: [String,String[]]=[]['0'];
  questionsall: Question[];
  resultAuswertung: String[];
  correctResults: number;
  falseResults: number;
  uncheckedResults: number;
  tokenCheck: boolean;
  tokenUnchecked: boolean;


  constructor() { }

submitResults(multisingle, fillin, questions) {
  this.resultMultiSingle = multisingle;
  this.resultFillIn = fillin;
  this. questionsall = questions;
  this.correctResults = 0;
  this.falseResults = 0;
  this.uncheckedResults = 0;


  for(let i=0;this.questionsall.length > i; i++){
    this.tokenCheck = false;


    //---------------------------------------------------FillIn------------------------------------------
    if (this.questionsall[i].qType==3){
    this.tokenUnchecked = false;
      if (this.resultFillIn[i][0]=='0'|| undefined){
        this.tokenUnchecked=false;
      }else{
        this.tokenUnchecked=true;
      }

      if(this.tokenUnchecked== false){
        this.uncheckedResults++;
      }
//-----------------------------------------------Auswertung----------------------------------------
      else{

          for(let a=0; this.questionsall[i].correctAnswer.length > a; a++){
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

    //---------------------------------------------------------Multi/FillIn------------------------
    else{
      this.tokenUnchecked=false;
      for(let k=0; this.resultMultiSingle[i].length > k; k++){
      if (this.resultMultiSingle[i][k]== '0' || undefined){
        this.tokenUnchecked=false;
      }else{
        this.tokenUnchecked=true;
        break;
      }
      }

      if(this.tokenUnchecked== false){
        this.uncheckedResults++;
      }
//----------------------------------------------------Auswertung-------------------------------

      else{

        for(let a=0; this.resultMultiSingle[i].length > a; a++){
          if(this.questionsall[i].correctAnswer[a] !== this.resultMultiSingle[i][a]){
            this.tokenCheck= false;
            break;
          }
          else{
            this.tokenCheck= true;

          }
        }

        if(this.tokenCheck==true){
          this.correctResults++;
        }else{
          this.falseResults++;
        }

      }
    }
  }

}




}

