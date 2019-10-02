import { Component, OnInit, Input, Inject } from '@angular/core';
import { QuestionService} from '../shared/question.service';
import { Question } from '../shared/question';
import { OptionsQuestService } from '../../shared/options-quest.service';



@Component({
  selector: 'mts-modus-lernen',
  templateUrl: './modus-lernen.component.html',
  styleUrls: ['./modus-lernen.component.css'],
})
export class ModusLernenComponent implements OnInit {

questionsf: Question[];
rc1: String[];
resultF: string[];
questions: string[];

  constructor(private oqs: OptionsQuestService,
              private qs: QuestionService
        ){}

  ngOnInit() {
  this.resultF = this.oqs.getOptions();
  alert(this.oqs.getOptions()); 
  alert(this.resultF[0]);
  this.rc1 = this.resultF[0].split(',', 6);
  alert(`${this.rc1[0]},${this.rc1[1]},${this.rc1[2]},${this.rc1[3]},${this.rc1[4]},${this.rc1[5]}`);
  this.getQuestions();

   


  }

    getQuestions (){    
    this.qs.getAll().subscribe(res => this.questionsf = res
     .filter(item => item.QCatalogue == 1)      
      .filter(item => item.QCatalogue ==  2)
      .filter(item => item.QCatalogue == 3)
     .filter(item => item.QType == 1)
      .filter(item => item.QType == 2)
      .filter(item => item.QType == 3));
    

  }
}

     