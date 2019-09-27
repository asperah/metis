import { Component, OnInit, Input } from '@angular/core';
import { QuestionService} from '../shared/question.service';
import { Question } from '../shared/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, find, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'mts-modus-lernen',
  templateUrl: './modus-lernen.component.html',
  styleUrls: ['./modus-lernen.component.css']
})
export class ModusLernenComponent implements OnInit {
//@Input() question: Question;
questions$ : Observable<Question[]>;
questions : Question[];

//questions: Question[];
  constructor(private qs: QuestionService) { }

  ngOnInit() {
   this.questions$ = this.qs.getAll()
   .pipe(filter(function(items): any{ items.forEach(it => it.qType == 1 )}));
     console.log(this.questions$);
     console.log(this.qs.getAll());
    
    // map(item.find (value => value.qType == 1})); 
       
      // items.forEach(function(subItem){ subItem.qType == 1})}));
        // console.log(this.questions$);
 //   // filter(function(items): Observable<Question[]>{
  //   //   items.forEach(function(subItem, i =0){subItem.qType !== i})}));
  }



}
/*
ngOnInit() {
  this.qs.getAll().subscribe(res => this.questions = res);
}*/