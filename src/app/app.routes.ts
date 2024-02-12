import { Routes } from '@angular/router';
import { RoutingTestComponent } from './routing-test/routing-test.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home-component', component: HomeComponent, pathMatch: 'full'}
    // {path: 'routing-test', component: RoutingTestComponent, pathMatch:"full"}
];
