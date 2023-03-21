import { Component } from '@angular/core';
import { User } from 'src/app/class/user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  model: User = new User("", "", "");

  onSubmit(): void {
    console.log(this.model);
  }
}
