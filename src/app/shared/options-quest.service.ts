import { Injectable, forwardRef } from '@angular/core';
import { convertToParamMap } from '@angular/router';



@Injectable({
  
  providedIn: 'root'
})
export class OptionsQuestService {
 
  resultCatalogues: string;
  resultQuestions:string;
  resultFinal: string[];
  constructor( ) { }

  submitLern(CatOpt, TypeOpt) {
    this.resultCatalogues = CatOpt;
    this.resultQuestions = TypeOpt;
    
    alert(this.resultCatalogues +','+ this.resultQuestions)

  }

  getOptions(){
    return this.resultFinal = [this.resultCatalogues+','+this.resultQuestions];
  }

  }







