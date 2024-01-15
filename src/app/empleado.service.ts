import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Esta url obtiene el  listado de todos los empleados del back
  private baseUrl = 'http://localhost:8080/api/v1/empleados';

  constructor(private httpClient : HttpClient) { }

  /**
   * Este metodo sirve para obtener todos los empleados desde el backend
   * @returns Una todos los empelados
   */
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  } 

  /**
   * sirve para registrar un empleado 
   * @param empleado se envia el cuerpo de registro
   * @returns un object empleado
   */
  registrarEmpleado(empleado:Empleado): Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}`, empleado);
  }

  /**
   * sirve para actualizar un  empleado
   * @param id id del empleado
   * @param empleado El cuerpo del JSONM
   * @returns Un empleado Modificado
   */
  actualizaEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, empleado);
  }

  /**
   * Sirve para buscar un empleado por id
   * @param id parametro de busqueda del empleado
   * @returns Un unico empleado
   */
  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`);
  }

  eliminarEmpleado(id : number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
