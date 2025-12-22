import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { User } from '../../core/interfaces/user';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatExpansionModule]
})
export class UserCardComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}
}
