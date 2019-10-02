import { Injectable, forwardRef } from '@angular/core';



@Injectable({
  
  providedIn: 'root'
})
export class OptionsQuestService {


  resultCatalogues;
  resultQuestions; 

  constructor( ) { }

  submitLern(CatOpt, TypeOpt) {
    
    const catalogueVal = CatOpt
      .map((checked,index) => checked ? CatOpt[index].id : 0)
      .filter(value => value !== null);
    const questionVal = TypeOpt
      .map((checked,index) => checked ? TypeOpt[index].id : 0)
      .filter(value => value !== null);
    alert(`${catalogueVal}, ${questionVal}`);
    this.resultCatalogues = catalogueVal;
    this.resultQuestions = questionVal;

  }


  }







