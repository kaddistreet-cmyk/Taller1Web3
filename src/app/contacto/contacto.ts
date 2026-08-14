import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private formBuilder = inject(FormBuilder);

  formularioSuscripcion = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.maxLength(10)]],
  });

  suscribirse() {
    if (this.formularioSuscripcion.valid) {
      alert('Gracias por suscribirte a Tailor Shop');
      this.formularioSuscripcion.reset();
    } else {
      alert('Los datos ingresados son incorrectos');
    }
  }
}
