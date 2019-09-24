import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

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
    {id:4, Qtype: "Multiple-Choice"},
    {id:5, Qtype: "Single-Choice"},
    {id:6, Qtype: "Fill-In"},
  ];

  constructor(private fb: FormBuilder) { 

  const formControls1 = this.CatalogueOptions.map(control => new FormControl(false));
  const formControls2 = this.QuestionType.map(control => new FormControl(false));

  this.optionsForm = this.fb.group(
    {CatalogueOptions: new FormArray(formControls1),
    QuestionType: new FormArray(formControls2)
    })
  }

  submit() {
    const catalogueValues = this.optionsForm.value.CatalogueOptions
      .map((checked,index) => checked ? this.CatalogueOptions[index].id : 0)
      .filter(value => value !== null);
    const questionValues = this.optionsForm.value.QuestionType
      .map((checked,index) => checked ? this.QuestionType[index].id : 0)
      .filter(value => value !== null);
      alert(`${catalogueValues}, ${questionValues}`);
  }

  ngOnInit() {

  }

}
