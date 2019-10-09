import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';
import { OptionsQuestService } from '../../shared/options-quest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'mts-modus-voll-pruef',
  templateUrl: './modus-voll-pruef.component.html',
  styleUrls: ['./modus-voll-pruef.component.css']
})
export class ModusVollPruefComponent implements OnInit {

//--------------Variabeln für die Anzeige der Fragen--------------
  questionsf: Question[] = [];
  rc1: Number[];
  resultF: string[];
  question: Question;
  i: number = 0 - 1;

//--------------Variabeln für die Auswertung der Fragen-----------
  examResults: { questionId: number, choosenAnswers: string[]}[] = [];

 // optionsForm: FormGroup;

  constructor(private oqs: OptionsQuestService,
    private qs: QuestionService,
    private router: Router,
    private fb: FormBuilder
  ) {
  //  const formControl = this.question.answerOptions.map(control => new FormControl(false));

   }

  ngOnInit() {
    console.log(this.questionsf);
    this.resultF = this.oqs.getOptions();
    this.rc1 = this.resultF[0].split(',', 6).map(items => parseInt(items));
    this.getQuestions();
    this.nextQuestion();
  }

  getQuestions() {
    this.qs.getAll().subscribe(res => this.questionsf = res
      .filter(item => item.qCatalogue == this.rc1[0]
        || item.qCatalogue == this.rc1[1]
        || item.qCatalogue == this.rc1[2])
      .filter(items => items.qType == this.rc1[3]
        || items.qType == this.rc1[4]
        || items.qType == this.rc1[5])
    );
  }
  nextQuestion() {
    //<---------------------------------------------Savequestionstatus!-------------------
  
    if (this.questionsf.length - 1 > this.i) {
  if(this.i != -1){
       this.examResults[this.i].choosenAnswers = this.result();
       this.examResults[this.i].questionId = this.i;
       console.log(this.examResults[this.i].choosenAnswers);
       console.log(this.examResults[this.i].questionId);
    }

        this.i = this.i + 1;
        this.question = this.questionsf[this.i];
    
    } else{
      if(this.i != -1){
      alert("Letzte Frage!")}
    }   

    console.log(this.i);
    console.log(this.questionsf[this.i]);
  
  }
  repeatQuestion() {
    if (this.i > 0) {
      this.i = this.i - 1;
      this.question = this.questionsf[this.i];
    }
  }
  result() {
    return this.question[this.i].answerOptions.filter(item => item.checked);
  }

}
