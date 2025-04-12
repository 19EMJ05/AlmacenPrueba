import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'
import { HistoricoService } from '../../services/historico.service';
import {MatSelectModule} from '@angular/material/select';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [MatTableModule,MatInputModule,MatSelectModule,MatCard],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent {
displayedColumns: string[] = ['nombreproducto',
                              'idusuario',
                              'tipomov',
                              'cantidadactual',
                              'cantidadnueva',
                              'fechamod'];
  dataSource:any;
  constructor(private hiscoricoService:HistoricoService){

  }
  ngOnInit(): void {
    this.getAlldatos();

  }
  getAlldatos(){
    this.hiscoricoService.getAllhistorico().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(Object.values(res));
        console.log(res)
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.tipomov.toLowerCase().includes(filter);
        };
      }
    });
  }

  filtrar(tipo: string) {
    this.dataSource.filter = tipo.trim().toLowerCase();
  }
}
