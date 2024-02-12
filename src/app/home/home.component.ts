import { Component } from '@angular/core';
import { Test2Component } from "../test-2/test-2.component";
import { TestComponent } from "../test/test.component";
import { RoutingTestButtonComponent } from "../routing-test-button/routing-test-button.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [Test2Component, TestComponent, RoutingTestButtonComponent]
})
export class HomeComponent {

}
