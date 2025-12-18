import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
// import { Observable } from 'rxjs/internal/Observable';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-main-table',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.css'
})
export class MainTableComponent {
  displayedColumns: string[] = ['name', 'email', 'company', 'details'];
  dataSource = new MatTableDataSource<User>();

  constructor(public dialog: MatDialog, private usersService: UsersService) {}

  ngOnInit() {
     // Отримуєио дані
    this.usersService.getData()
      .subscribe((data: User[]) => {
        this.dataSource.data = data;
        console.log(this.dataSource);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetails(id: number) {
    console.log(this.dataSource.data.find((item: User) => item.id === id));

    this.dialog.open(UserCardComponent, {
      data: this.dataSource.data.find((item: User) => item.id === id)
    });
  }
}
