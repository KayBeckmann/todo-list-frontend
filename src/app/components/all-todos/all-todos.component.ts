import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { lastValueFrom } from "rxjs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { ThemePalette } from "@angular/material/core";

@Component({
  selector: "app-all-todos",
  templateUrl: "./all-todos.component.html",
  styleUrls: ["./all-todos.component.scss"]
})
export class AllTodosComponent {
  todos: any = [];
  color: ThemePalette = "accent";
  checked = false;
  disabled = false;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.todos = await this.loadTodos();
    console.log(this.todos);
  }

  loadTodos() {
    const url = environment.baseUrl + "todos/";

    return lastValueFrom(this.http.get(url));
  }
}
