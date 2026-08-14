import { Component, inject } from '@angular/core';
import { MisionVision } from '../service/mision-vision';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {
  private misionVisionService = inject(MisionVision);

  informacion = this.misionVisionService.obtenerInformacion();
}
