import { Component } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/interfaces/user';
// import { Observable } from 'rxjs/internal/Observable';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-table',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  displayedColumns: string[] = ['name', 'email', 'company', 'details'];
  dataSource = new MatTableDataSource<User>();

  constructor(public dialog: MatDialog, private usersService: UsersService) {}

  ngOnInit() {
     // Get data
    this.usersService.getData()
      .subscribe((data: User[]) => {
        this.dataSource.data = data;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetails(id: number) {
    this.dialog.open(UserCardComponent, {
      data: this.dataSource.data.find((item: User) => item.id === id)
    });
  }
}
