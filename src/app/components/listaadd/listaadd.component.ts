import { Component, OnInit } from '@angular/core';
import { ConexionbdService } from 'src/app/services/conexionbd.service';

@Component({
  selector: 'app-listaadd',
  templateUrl: './listaadd.component.html',
  styleUrls: ['./listaadd.component.css']
})
export class ListaaddComponent implements OnInit {

  item: any = {
    name : ''
  }

  constructor(private servicio:ConexionbdService) { }

  ngOnInit() {
  }

  agregar() {
    this.servicio.addTarea(this.item.name)
    this.item.name = '';
  }

  delTarea(){
    
  }

}
