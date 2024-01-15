import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }


  guardarEmpleado(){
    this.empleadoService.registrarEmpleado(this.empleado).subscribe( data =>{
      console.log(data);
      this.irListaEmpleados();
      
    }, error => console.log(error)
    );
  }

  irListaEmpleados(){
    this.router.navigate(['empleados']);
    swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido creado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEmpleado();
  }

}
