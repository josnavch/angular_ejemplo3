import { Component, OnInit, ViewChild } from '@angular/core';
import { ConexionbdService } from 'src/app/services/conexionbd.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  closeResult = '';
  items:any;
  editarItem:any = {
    name : ''
  };
 

  constructor(private conexion:ConexionbdService, private modalService: NgbModal) {
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
    this.closeResult = 'Update Item';
    console.log(this.editarItem.name);
    
  }

  open(content: any, item: any) {
    this.editarItem = item;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log(reason)

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
}
