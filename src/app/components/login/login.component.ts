import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Send Userinput to Backend.
   */
  async login() {
    try {
      let resp = await this.as
        .loginWithUsernameAndPassword(this.username, this.password)
        .then((user: any) => localStorage.setItem("token", user.token));
      this.router.navigateByUrl("todos");
    } catch (error) {
      alert("LOGIN FEHLGESCHLAGEN");
      console.error(error);
    }
  }
}
