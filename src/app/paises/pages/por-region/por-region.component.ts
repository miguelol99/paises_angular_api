import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = ''
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  activarRegion( region:string ) {

    if (region == this.regionActiva) return

    this.regionActiva = region
    this.paises = []

    this.paisService.buscarRegion( region )
      .subscribe({
        next: (resp) => {
          this.paises = resp
        },
        error: (e) => this.paises = []
      })

  }

  getClaseCSS( region: string ){
    return(region == this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary' 
  }

}
