import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ShowButtonComponent } from './show-button/show-button.component';
import { DisplayNameComponent } from './display-name/display-name.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UserageComponent } from './userage/userage.component';

export const routes: Routes = [
        {
            title: 'Component 1: "Hello World Display',
            component: HelloWorldComponent,
            path:'Hello-World',
        },
        {
            title: 'Component 2: "Hello World Button',
            component: ShowButtonComponent,
            path:'show-button',
        },
        {
            title: 'Component 3: "Display Username',
            component: DisplayNameComponent,
            path:'show-username',
        },
        {
            title: 'Component 4: "Count',
            component: CounterComponent,
            path:'countme',
        },
        {
            title: 'Component 5: "Simple Form',
            component: SimpleformComponent,
            path:'formnathis',
        },
        {
            title: 'Component 5: "User Age',
            component: UserageComponent,
            path:'ageyan',
        },


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
