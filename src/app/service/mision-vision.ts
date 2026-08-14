import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MisionVision {
  obtenerInformacion() {
    return [
      {
        id: 1,
        titulo: 'Misión',
        descripcion: 'Crear estampados de calidad que representen el estilo de cada cliente.',
        imagen: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/bullseye.svg',
      },
      {
        id: 2,
        titulo: 'Visión',
        descripcion: 'Ser un negocio textil reconocido por su creatividad y buen servicio.',
        imagen: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/icons/eye.svg',
      },
      {
        id: 3,
        titulo: 'Valores',
        descripcion: 'Creatividad, responsabilidad, respeto y compromiso.',
        imagen: '',
      },
    ];
  }
}
