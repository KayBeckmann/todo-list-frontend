import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { AllTodosComponent } from "./components/all-todos/all-todos.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "todos", component: AllTodosComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
