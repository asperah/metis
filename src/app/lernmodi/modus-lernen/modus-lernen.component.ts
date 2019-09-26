import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../shared/question.service';
import { Question } from '../shared/question';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mts-modus-lernen',
  templateUrl: './modus-lernen.component.html',
  styleUrls: ['./modus-lernen.component.css']
})
export class ModusLernenComponent implements OnInit {
questions: Observable<Question[]>;
  constructor(private qs: QuestionService,
               private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.questions = this.qs.getAll();
  }

}
//questions verbinden mit html!