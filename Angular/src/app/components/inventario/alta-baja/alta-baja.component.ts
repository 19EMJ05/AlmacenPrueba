import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-alta-baja',
  standalone: true,
  imports: [MatTableModule,MatButton,MatInputModule],
  templateUrl: './alta-baja.component.html',
  styleUrl: './alta-baja.component.scss'
})
export class AltaBajaComponent implements OnInit{
  displayedColumns: string[] = ['nombreproducto', 'estatusproducto','Opciones'];
  dataSource:any;
  constructor(private productosService:ProductosService){

  }
  ngOnInit(): void {
    this.getAlldatos();


  }
  getAlldatos(){
    this.productosService.getAllProducto().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(Object.values(res));
        this.dataSource.filterPredicate = (data: any, filter: string) => {

          return data.nombreproducto.toLowerCase().includes(filter);
        };
      }
    });
  }
  altaBajaProducto(id:number,estatus:number){
    if(estatus==1){
      this.productosService.updateEstatus(id,0).subscribe({
        next:()=>{
          this.getAlldatos();
        }
      });
    }else{
      this.productosService.updateEstatus(id,1).subscribe({
        next:()=>{
          this.getAlldatos();
        }
      });
    }

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
