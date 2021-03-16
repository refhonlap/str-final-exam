import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'str-final-exam';
  phrase = '';

  constructor(
    private userService: UserService,
  ) { }

  deleteItem(user: User): void {
    this.userService.remove(user).subscribe(
      () => {
        this.userService.getAll();
      }
    );
  }
}