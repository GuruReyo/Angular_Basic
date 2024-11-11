import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './Mycomponents/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent],
  templateUrl: './app.component.html',
  styleUrls:[ './app.component.css']
})
export class AppComponent {
  title = 'Angular-Basic';
  constructor(){
    // setTimeout(()=>{
    //   this.title=' Changed Title'
    // },4000)
  }
}
