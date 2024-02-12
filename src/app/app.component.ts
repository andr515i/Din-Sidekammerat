import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RoutingTestButtonComponent } from "./routing-test-button/routing-test-button.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent, RoutingTestButtonComponent]
})
export class AppComponent {
  title = 'Din Sidekammerat';
}
