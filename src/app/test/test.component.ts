import { Component } from '@angular/core';
import { Test2Component } from "../test-2/test-2.component";

@Component({
    selector: 'app-test',
    standalone: true,
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    imports: [Test2Component]
})
export class TestComponent {

}
