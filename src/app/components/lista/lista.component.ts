import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from 'src/app/services/conexionbd.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  editarItem:any = {
    name : ''
  };

  constructor(private conexion:ConexionbdService) {
    this.conexion.listatareas().subscribe(item => {
      this.items = item;
    })
   }

  ngOnInit(): void {
  }

  eliminar(item: any){
    this.conexion.eliminarItem(item)
  }
  editar(item: any){
    this.editarItem = item;
    console.log(this.editarItem.name, this.editarItem.id);
  }

  agregarItemEditado(){
    this.conexion.editarItem(this.editarItem);
    console.log(this.editarItem.name, this.editarItem.id);
  }

  
}
