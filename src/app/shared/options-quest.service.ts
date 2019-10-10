import { Injectable, } from '@angular/core';

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
  }

  getOptions(){
    return this.resultFinal = [this.resultCatalogues+','+this.resultQuestions];
  }

  }




