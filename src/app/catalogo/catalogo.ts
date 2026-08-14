import { Component, inject, OnInit, signal } from '@angular/core';
import { Heroe } from '../service/heroe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  private heroeService = inject(Heroe);

  catalogo= signal<any[]>([]);

  ngOnInit() {
    this.heroeService.obtenerHeroes().subscribe((data) => {
      this.catalogo.set(data);
    });
  }
}
