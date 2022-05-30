import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino:string = ''
  hayError: boolean = false
  paises: Country[] = []

  paisesSugeridos: Country[] = []

  constructor( private paisService: PaisService) { }

  buscar( termino: string) {
    this.termino = termino
    this.hayError = false

    this.paisService.buscarPais( this.termino )
    .subscribe({
      next: (paises) => {
        console.log(paises)
        this.paises = paises      
      },
      error: (e) => { 
        this.hayError = true
        this.paises = []
      }
    })
  }

  sugerencias( termino: string ) {
    this.hayError = false
    this.termino = termino
    
    this.paisService.buscarPais ( termino )
      .subscribe({
        next: (paises) => this.paisesSugeridos = paises.splice(0,5),
        error: (err) => this.paisesSugeridos = []
      })
  }

  buscarSugerido( termino: string) {
    this.buscar( termino )
    this.paisesSugeridos = []
  }



}
