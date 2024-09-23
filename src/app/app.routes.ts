import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ShowButtonComponent } from './show-button/show-button.component';
import { DisplayNameComponent } from './display-name/display-name.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UserageComponent } from './userage/userage.component';
import { UserGreetingsComponent } from './user-greetings/user-greetings.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextlengthComponent } from './text-length/text-length.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { EvenOddCheckerComponent } from './even-odd-checker/even-odd-checker.component';
import { WordReverserComponent } from './word-reverser/word-reverser.component';

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
            title: 'Component 6: "User Age',
            component: UserageComponent,
            path:'ageyan',
        },
        {
            title: 'Component 7: "Greetings',
            component: UserGreetingsComponent,
            path:'greetme',
        },
        {
            title: 'Component 8: "Calculator',
            component: CalculatorComponent,
            path:'compute',
        },
        {
            title: 'Component 9: "Text Length',
            component: TextlengthComponent,
            path:'lengthy',
        },
        {
            title: 'Component 10: "Currency Converter',
            component: CurrencyConverterComponent,
            path:'exchange',
        },
        {
            title: 'Component 11: "Even or Odd',
            component: EvenOddCheckerComponent,
            path:'huwhat',
        },
        {
            title: 'Component 12: "Word Reversing',
            component: WordReverserComponent,
            path:'drowesrever',
        }


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
