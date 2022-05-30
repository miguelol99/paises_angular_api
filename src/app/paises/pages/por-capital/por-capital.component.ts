import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  paises: Country[] = []
  termino: string = ''
  hayError: boolean = false

  constructor(private paisService: PaisService) { }

  buscar( termino: string) {
    this.termino = termino
    this.hayError = false

    this.paisService.buscarCapital( termino )
    .subscribe({
      next: (resp) => {
        console.log(resp);
        this.paises = resp
      },
      error: (e) => {
        this.hayError = true
        this.paises = []
      }
    })
    
  }

  sugerencias(termino: string) {
    console.log('sugerencias');
    this.hayError = false
    
  }

}
