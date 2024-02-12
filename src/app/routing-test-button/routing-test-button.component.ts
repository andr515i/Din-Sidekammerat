import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-routing-test-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './routing-test-button.component.html',
  styleUrl: './routing-test-button.component.scss'
})
export class RoutingTestButtonComponent {

}
