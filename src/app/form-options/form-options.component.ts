import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { OptionsQuestService } from '../shared/options-quest.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mts-form-options',
  templateUrl: './form-options.component.html',
  styleUrls: ['./form-options.component.css']
})
export class FormOptionsComponent implements OnInit {
  optionsForm: FormGroup;
  
  CatalogueOptions = [
    {id:1, Catalogue: "Fragenkatalog 1"},
    {id:2, Catalogue: "Fragenkatalog 2"},
    {id:3, Catalogue: "Fragenkatalog 3"},
  ];

  QuestionType = [
    {id:1, Qtype: "Multiple-Choice"},
    {id:2, Qtype: "Single-Choice"},
    {id:3, Qtype: "Fill-In"},
  ];

  constructor(private fb: FormBuilder,
              private oqs: OptionsQuestService,
              private route: ActivatedRoute,
              private router: Router) { 

  const formControls1 = this.CatalogueOptions.map(control => new FormControl(false));
  const formControls2 = this.QuestionType.map(control => new FormControl(false));
  

  this.optionsForm = this.fb.group(
    {CatalogueOptions: new FormArray(formControls1),
    QuestionType: new FormArray(formControls2),
    })

  
  }

  submitLernOp() {
    const catalogueValues = this.optionsForm.value.CatalogueOptions
      .map((checked,index) => checked ? this.CatalogueOptions[index].id : 0)
      .filter(value => value !== null);
    const questionValues = this.optionsForm.value.QuestionType
      .map((checked,index) => checked ? this.QuestionType[index].id : 0)
      .filter(value => value !== null);
    this.oqs.submitLern(catalogueValues, questionValues);
    this.router.navigate(['modus-lernen']);
  }

  submitTeilOp(){
    const catalogueVal = this.optionsForm.value.CatalogueOptions
    .map((checked,index) => checked ? this.CatalogueOptions[index].id : 0)
    .filter(value => value !== null);
    const questionVal = this.optionsForm.value.QuestionType
    .map((checked,index) => checked ? this.QuestionType[index].id : 0)
    .filter(value => value !== null);
    alert(catalogueVal+',' +questionVal)
    this.oqs.submitLern(catalogueVal, questionVal);
    this.router.navigate(['modus-teil-pruef']);
  }

  submitVollOp(){
    const catalogueVal = this.optionsForm.value.CatalogueOptions
    .map((checked,index) => checked ? this.optionsForm.value.CatalogueOptions[index].id : 0)
    .filter(value => value !== null);
  const questionVal = this.optionsForm.value.QuestionType
    .map((checked,index) => checked ? this.optionsForm.value.QuestionType[index].id : 0)
    .filter(value => value !== null);
    this.oqs.submitLern(catalogueVal, questionVal);
    this.router.navigate(['modus-voll-pruef']);
  }


  ngOnInit() {

  }

}
