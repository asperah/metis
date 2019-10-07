import { Component, OnInit, Input, Inject } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';
import { OptionsQuestService } from '../../shared/options-quest.service';

@Component({
  selector: 'mts-modus-lernen',
  templateUrl: './modus-lernen.component.html',
  styleUrls: ['./modus-lernen.component.css'],
})
export class ModusLernenComponent implements OnInit {

  questionsf: Question[]=[];
  rc1: Number[];
  resultF: string[];
  question: Question;
  i: number;


  constructor(private oqs: OptionsQuestService,
    private qs: QuestionService
  ) { }

  ngOnInit() {
    console.log(this.questionsf);
    this.resultF = this.oqs.getOptions();
    this.rc1 = this.resultF[0].split(',', 6).map(items => parseInt(items));
    this.getQuestions();
    this.i = 0;
    this.question = this.questionsf[0];
  }

  getQuestions() {
    this.qs.getAll().subscribe(res => this.questionsf = res
      .filter(item => item.QCatalogue == this.rc1[0]
        || item.QCatalogue == this.rc1[1]
        || item.QCatalogue == this.rc1[2])
      .filter(items => items.QType == this.rc1[3]
        || items.QType == this.rc1[4]
        || items.QType == this.rc1[5])
    );
    // this.qs.getAll().subscribe(res => this.questionsf = res);
    
      // .filter(item => item.QCatalogue == this.rc1[0]
      //   || item.QCatalogue == this.rc1[1]
      //   || item.QCatalogue == this.rc1[2])
      // .filter(items => items.QType == this.rc1[3]
      //   || items.QType == this.rc1[4]
      //   || items.QType == this.rc1[5]));
  }

  nextQuestion() {
    console.log(this.i);
    if (this.questionsf.length -1 > this.i) {
      this.i = this.i + 1;
      this.question = this.questionsf[this.i];
  }
    console.log(this.i);
    console.log(this.questionsf[this.i]);
  }
}