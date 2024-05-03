import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export class DetallesProductoComponent {
  ruta=inject(ActivatedRoute)
  productos=[
    {
      id: "1",
      nombre: 'Mario Bros',
      precio: "20",
      url: "https://th.bing.com/th/id/R.2ed2a8b8fe763f56f0dfc77cc98d926d?rik=Kc%2bU%2f32V9hsozQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_yrXvd0czorE%2fTJSmxrPyHII%2fAAAAAAAAAO4%2fbvfZ9c7QD94%2fs1600%2fsuper-mario.jpg&ehk=cJw3Rgq9PmF04oTdIlzJBKTEMhMxl%2bEfoRJZVNUqquc%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: "2",
      nombre: 'Call of Duty',
      precio: "25",
      url: "https://th.bing.com/th/id/OIP.uWxPtx4Cj3-xdBnSUdDr-QAAAA?rs=1&pid=ImgDetMain"
    },
    {
      id: "3",
      nombre: 'mortal kombat',
      precio: "30",
      url:"https://images.alphacoders.com/271/271571.jpg"
    },
    {
      id: "4",
      nombre: 'FC24',
      precio: "15",
      url:"https://stadt-bremerhaven.de/wp-content/uploads/2023/07/easportsfc24_ultimateedition_keyart-2.jpg"
    },
    {
      id: "5",
      nombre: 'plants vs zombies garden warfare',
      precio: "35",
      url:"https://content.pulse.ea.com/content/legacy/www-pvzgw2/es_ES/news/super-fertilizer-and-no-brainerz-upgrades/_jcr_content/featuredImage/renditions/rendition1.img.jpg"
    },
  ]
  producto:any
  id:any
  mgOInt(){
    this.ruta.params.subscribe(p=>{
      console.log(p['idProductos']);
      this.id=p['idProductos']
      this.productos.forEach(element=>{
        if(element.id==this.id){
          this.producto=element
        }
      });
    })
  }
  mensaje(){
    alert("PRODUCTO")
  }
}
