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
rCatalog = this.oqs.resultCatalogues;
rQuest = this.oqs.resultQuestions;

  constructor(private oqs: OptionsQuestService,
               ) { 
              }

  ngOnInit() {
   // this.getQuestions();
   console.log(this.rCatalog);


  }

  /* getQuestions (){    

    this.qs.getAll().subscribe(res => this.questionsf = res
      .filter(item => item.QCatalogue ==  0)
     .filter(item => item.QCatalogue ==  this.rCatalog[1])
      .filter(item => item.QCatalogue ==  this.rCatalog[2])
      .filter(item => item.QCatalogue ==  this.rQuest[0])
      .filter(item => item.QCatalogue ==  this.rQuest[1])
      .filter(item => item.QCatalogue ==  this.rQuest[2])
    )

  }*/


}

     