import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { Question } from '../shared/question';
import { OptionsQuestService } from '../../shared/options-quest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ResultService } from '../shared/result.service';

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
  typeNum = new Number(3);

  //--------------Variabeln für die Auswertung der Multiple-Choice-Fragen-----------
  examResults: String[]=[];
  examRes: [String[]]=[[]];
  optionsForm1: FormGroup;

  //--------------Variabeln für die Auswertung der Fill-In-Fragen-----------
    examResultsFillIn: String[]=[];
    examResFillIn: [String[]]=[[]];
    optionsForm2: FormGroup;

  //---------------------------------Konstruktor------------------------
  constructor(private oqs: OptionsQuestService,
    private qs: QuestionService,
    private router: Router,
    private fb: FormBuilder,
    private rs: ResultService,
    private route: ActivatedRoute) {}

//-------------------------------------Funktionen---------------------------------------------
  ngOnInit() {
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
    if (this.questionsf.length - 1 > this.i) {
      if (this.i != -1) {
        this.fillResults();
      }

      this.i = this.i + 1;
      this.question = this.questionsf[this.i];
 
      if (this.question.qType == 3){
        this.formFillIn();
      }else{
        this.formMulti();
      }

    } else {
      if (this.i != -1) {        
        alert("Letzte Frage!")
        this.fillResults();      
      }
    }
  }

  repeatQuestion() {
    if (this.i > 0) {
      this.i = this.i - 1;
      this.question = this.questionsf[this.i];
    }
  }

  formMulti(){
    const formControl = this.question.answerOptions.map(control => new FormControl(false));

    this.optionsForm1 = this.fb.group(
      {
        answerOptions: new FormArray(formControl),
      })
  }

  resultMulti() {

    this.examResults = this.optionsForm1.value.answerOptions
      .map((checked, y) => checked ? this.question.answerOptions[y] : 0)
      .filter(value => value !== null);
  }

  formFillIn(){   
    this.optionsForm2 = this.fb.group(
      {
        Antwort: ''
      })
  }

  resultFillin() {
    this.examResultsFillIn = this.optionsForm2.value;
  }

  submitRes(){
    this.fillUndefined();
    console.log(this.examRes);
    console.log(this.examResFillIn);
    console.log(this.questionsf);
    this.rs.submitResults(this.examRes, this.examResFillIn, this.questionsf);

    this.router.navigate(['auswertung']);
  }

  fillResults(){
    if(this.questionsf[this.i].qType == 3){
      this.resultFillin();
      this.examResFillIn[this.i] = this.examResultsFillIn;
      this.examRes[this.i]= [this.i['0']]; 
    }else{       
    this.resultMulti();
    this.examRes[this.i]= this.examResults;    
    this.examResFillIn[this.i] = [this.i['0']];
    }
  }

  fillUndefined(){
    for(let u=0;this.questionsf.length > u;u++){
  
      if(this.examRes[u][0]== undefined && this.examResFillIn[u][0] == undefined){    
        this.examRes[u]= [u['0']];  
        this.examResFillIn[u] = [u['0']];


      }
    }
  }


}
