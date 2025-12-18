import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MainTableComponent } from '../main-table/main-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ukrposhta_Test';
}
