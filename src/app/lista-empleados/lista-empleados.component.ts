import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor( private empleadoService: EmpleadoService, private router: Router ) { }

  ngOnInit(): void {
    
    this.obtenerEMpleados();
  
  }

  obtenerEMpleados() {
    this.empleadoService.obtenerListaDeEmpleados().subscribe(datos => {
      this.empleados = datos;
    })
  }

  actualizaEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado',id])
  }

  eliminarEmpleado(id: number) {
    swal({
      title: 'Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.empleadoService.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEMpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetalles(id: number) {
    this.router.navigate(['empleado-detalles',id]);
  }

}
