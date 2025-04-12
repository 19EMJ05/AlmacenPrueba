import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [RouterOutlet,MatCardModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {

}
