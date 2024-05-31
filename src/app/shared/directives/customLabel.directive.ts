import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { log } from 'console';


@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {

private htmlElement?: ElementRef<HTMLElement>;
private _color: string = 'red'
private _errors?: ValidationErrors | null;

  @Input() set color(value: string){
    console.log(value);
    this._color = value
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  };


  constructor(private el: ElementRef<HTMLElement>){
    this.htmlElement = el;
    //this.htmlElement.nativeElement.innerHTML = 'Hola Mundo'
    console.log(el);
  }

  ngOnInit(): void {
    console.log('Directiva -  NgOnInit')
  }

  setStyle(): void {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage():void {
    if(!this.htmlElement) return;
    if(!this._errors){
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    console.log(this._errors)

    const errors = Object.keys(this._errors)

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if(errors.includes('minlength')){

      const min = this._errors['minlength']['requiredLength'];
      const max = this._errors['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `La longitud mínima es de ${min} y usted solo tiene ${max}`;
      return;
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = 'El formato de correo electrónico no es válido';
      return;
    }
  }

}
