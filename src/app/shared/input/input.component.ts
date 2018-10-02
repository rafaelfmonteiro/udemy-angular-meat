import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label:string
  @Input() errorMessage:string

  myInput : any

  @ContentChild(NgModel) model : NgModel

  constructor() { }

  ngOnInit() {
  }

  hasSuccess(): boolean{
    return this.myInput.valid && (this.myInput.dirty || this.myInput.touched)
  }

  hasError(): boolean {
    return !this.myInput.valid && (this.myInput.dirty || this.myInput.touched)
  }

  ngAfterContentInit(){
    this.myInput = this.model
    if (this.myInput === undefined) {
        throw  new Error(`Essse componente (${this.myInput}) precisa
          ser usado com a diretiva NgModel`)
    }
  }

}
