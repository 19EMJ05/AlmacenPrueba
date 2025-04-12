import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-entrada-salida',
  standalone: true,
  imports: [MatTableModule,MatButton,MatInputModule,FormsModule],
  templateUrl: './entrada-salida.component.html',
  styleUrl: './entrada-salida.component.scss'
})
export class EntradaSalidaComponent {
  displayedColumns: string[] = ['nombreproducto', 'cantidadproducto','Opciones','Aceptar'];
  dataSource:any;
  lastSegment:string;
  filterValues = {
    texto: '',
    estatus: '1'
  };

  constructor(private productosService:ProductosService,private router: Router){
    const urlSegments = this.router.url.split('/');
    this.lastSegment = urlSegments[urlSegments.length - 1]

  }
  ngOnInit(): void {
    this.getAlldatos();


  }
  getAlldatos(){
    this.productosService.getAllProducto().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(Object.values(res));
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const filters = JSON.parse(filter);
          const filtroEstatus=data.estatusproducto.toString()===filters.estatus;
          const filtroNombre=data.nombreproducto.toLowerCase().includes(filters.texto);
          return filtroNombre&&filtroEstatus;
        };
        this.dataSource.filter= JSON.stringify(this.filterValues);
      }
    });

  }
  updateCantiidad(idproducto:number,cantidadNueva:number,cantidadActual:number){
    if(this.lastSegment=="entrada"){
      cantidadNueva=cantidadActual+cantidadNueva;
    }else{
      if(cantidadNueva>cantidadActual){
        return alert("No puedes dar salida a producto no existente")
      }else{
        cantidadNueva=cantidadActual-cantidadNueva;
      }

    }
    this.productosService.updateCantidad(idproducto,cantidadNueva,this.lastSegment).subscribe({
      next:(res)=>{
        this.getAlldatos();
        alert(Object.values(res));
      }
    });

  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.filterValues.texto = filtro.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }
  validadorInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, ''); // Elimina todo excepto números
    input.value = sanitizedValue; // Asigna solo números al input
  }

}
