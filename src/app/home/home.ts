import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  imagenInicio = "https://t3.ftcdn.net/jpg/04/86/00/42/360_F_486004216_9po1Slygbuepr1YgXehN9O1Rp0Ue9koQ.jpg";

  servicios = [
    {
      id: 1,
      nombre: 'Estampados',
      descripcion: 'Estampados de alta calidad para tu hogar, estudio y trabajo.',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKG9BUk8vmXYM4YQW-ignVogWURbd9_PtAPbWyFEHGMNSIV1P8DUHMU&s=10',
    },
    {
      id: 2,
      nombre: 'Tela',
      descripcion: 'Confeccionamos camisas de algodón para tu comodidad y estilo.',
      imagen:
        'https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C919SoMHXP3L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png',
    },
    {
      id: 3,
      nombre: 'Atención',
      descripcion: 'Nuestra atención al cliente es de primera, siempre estamos dispuestos a ayudarte.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bfzzmXIDBA4ZrBDieZvHn9DckQH2R_Ik2U9rTqKZEtsVWMv6X5Fd5tkb&s=10',
    },

  ];
}
