import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../service/heroe';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './heroes.css',
})
export class Heroes implements OnInit {
  private heroeService = inject(Heroe);
  heroes = signal<any[]>([]);

  ngOnInit() {
    this.heroeService.obtenerHeroes().subscribe((data) => {
      this.heroes.set(data);
    });
  }
}
