import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Translation } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country
  translations!: Translation[]

  constructor(private activatdRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    // this.activatdRoute.params
    //   .pipe(
    //       switchMap( ( param ) => this.paisService.getPaisPorCodigo( param['id'] )),
    //       tap( console.log )
    //   )
    //   .subscribe( resp => this.pais = resp )

    this.activatdRoute.params
      .subscribe( param => {

        this.paisService.getPaisPorCodigo( param['id'] )
          .subscribe( paises => {
              console.log(paises[0])
              this.pais = paises[0]           
            });         
        })       
  }

}
