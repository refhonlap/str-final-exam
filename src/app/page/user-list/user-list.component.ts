import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  @Output() delete: EventEmitter<User> = new EventEmitter();

  sortColumn = 'id';
  reverse = false;

  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  sort(column: string) {
    if (this.sortColumn === column) {
      // set boolean true or false
        this.reverse = !this.reverse;
      }
      // If we click on any column then it will assign that name to sortColumn.
    this.sortColumn = column;
  }

  deleteItem(user: User): void {
    this.userService.remove(user).subscribe(
      () => {
        this.userService.getAll();
      }
    );
  }
  
  onDelete(user: User): void {
    this.delete.emit(user);
    console.log('event triggerd:');
  }

}
