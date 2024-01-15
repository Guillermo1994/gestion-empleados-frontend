import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Empleado;
  id: number;

  constructor(private route: ActivatedRoute, private empleadoService: EmpleadoService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(data => {

      this.empleado = data;
    }, error => console.log(error)
    )
  }

  NavigateListaEmpleados() {
    this.router.navigate(['empleados'])
    swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }
  onSubmit() {

    this.empleadoService.actualizaEmpleado(this.id,this.empleado).subscribe(data => {
      this.NavigateListaEmpleados();
    }, error => console.log(error)
    )
  }

}
