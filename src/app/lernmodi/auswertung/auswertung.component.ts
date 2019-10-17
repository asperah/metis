import { Component, OnInit } from '@angular/core';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'mts-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.css']
})
export class AuswertungComponent implements OnInit {
  corRes: Number;
  falseRes: Number;
  uncheckedRes: Number;


  constructor( private rs: ResultService ) { }

  ngOnInit() {
  this.corRes = this.rs.correctResults;
  this.falseRes = this.rs.falseResults;
  this.uncheckedRes = this.rs.uncheckedResults;
  }

}
