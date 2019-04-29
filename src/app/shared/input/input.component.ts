import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel, FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label:string
  @Input() errorMessage:string
  @Input() showTip : boolean = true;

  myInput : any

  @ContentChild(NgModel) model : NgModel
  @ContentChild(FormControlName) control: FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.myInput = this.model || this.control
    if (this.myInput === undefined) {
        throw  new Error(`Essse componente (${this.myInput}) precisa
          ser usado com a diretiva NgModel ou FormControlName`)
    }
  }

  hasSuccess(): boolean{
    return this.myInput.valid && (this.myInput.dirty || this.myInput.touched)
  }

  hasError(): boolean {
    return !this.myInput.valid && (this.myInput.dirty || this.myInput.touched)
  }
}
