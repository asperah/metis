import { Component, OnInit, Input, Inject } from '@angular/core';
import { QuestionService} from '../shared/question.service';
import { Question } from '../shared/question';
import { OptionsQuestService } from '../../shared/options-quest.service';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { isNumber } from 'util';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'mts-modus-lernen',
  templateUrl: './modus-lernen.component.html',
  styleUrls: ['./modus-lernen.component.css'],
})
export class ModusLernenComponent implements OnInit {

questionsf: Question[];
rc1: Number[];
resultF: string[];
questions: Question[];
miep: Number[] = [1,2,3];

  constructor(private oqs: OptionsQuestService,
              private qs: QuestionService
        ){}

  ngOnInit() {
  this.resultF = this.oqs.getOptions();
  alert(this.oqs.getOptions()); 
  alert(this.resultF[0]);
  this.rc1 = this.resultF[0].split(',', 6).map(items => parseInt(items));
  alert(`${this.rc1[0]},${this.rc1[1]},${this.rc1[2]},${this.rc1[3]},${this.rc1[4]},${this.rc1[5]}`);
  this.getQuestions();
  console.log(this.questionsf);

  





  }

    getQuestions (){    
    
    this.qs.getAll().subscribe(res => this.questionsf = res      
     .filter(item => item.QCatalogue ==  this.rc1[0] 
            || item.QCatalogue ==  this.rc1[1]
            ||item.QCatalogue ==  this.rc1[2])
      .filter(items => items.QType ==  this.rc1[3] 
              || items.QType ==  this.rc1[4]
              ||items.QType==  this.rc1[5])
     
            );

  }
}

     