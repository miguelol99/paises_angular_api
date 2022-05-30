import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-sugerencias',
  templateUrl: './pais-sugerencias.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PaisSugerenciasComponent  {

  @Input() termino: string = ''
  @Input() paisesSugeridos: Country[] = []
  @Output() onBuscarSelected: EventEmitter<string> = new EventEmitter()

  constructor() { }

  buscarSeleccionado() {
    this.onBuscarSelected.emit( this.termino )
  }


}
