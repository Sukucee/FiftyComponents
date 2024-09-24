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
import { ShowDateComponent } from './show-date/show-date.component';
import { UsernameComponent } from './username/username.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { SimpleLoginComponent } from './simple-login/simple-login.component';
import { FarenheitToCelciusComponent } from './farenheit-to-celcius/farenheit-to-celcius.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { CharacterCounterComponent } from './character-counter/character-counter.component';
import { PalindromeCheckerComponent } from './palindrome-checker/palindrome-checker.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FactorialCalculatorComponent } from './factorial-calculator/factorial-calculator.component';
import { ToDoManagerComponent } from './to-do-manager/to-do-manager.component';

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
        },
        {
            title: 'Component 13: "Date Today',
            component: ShowDateComponent,
            path:'whatdaytoday',
        },
        {
            title: 'Component 14: "My Username',
            component: UsernameComponent,
            path:'saymyname',
        },
        {
            title: 'Component 15: "Multiplication Table',
            component: MultiplicationTableComponent,
            path:'multiplyit',
        },
        {
            title: 'Component 16: "Logging In',
            component: SimpleLoginComponent ,
            path:'signin',
        },
        {
            title: 'Component 17: "Farenheit To Celsius',
            component: FarenheitToCelciusComponent ,
            path:'temperature',
        },
        {
            title: 'Component 18: "Bookmark List',
            component: BookmarkListComponent,
            path:'markthis',
        },
        {
            title: 'Component 19: "Character Count',
            component: CharacterCounterComponent ,
            path:'countmein',
        },
        {
            title: 'Component 20: "Palindrome Check',
            component:  PalindromeCheckerComponent ,
            path:'checkitout',
        },
        {
            title: 'Component 21: "Temperature Converter',
            component:  TemperatureConverterComponent ,
            path:'hottogo',
        },
        {
            title: 'Component 22: "Shopping List',
            component:  ShoppingListComponent ,
            path:'minekonaito',
        },
        {
            title: 'Component 23: "Factorial Calculator',
            component:  FactorialCalculatorComponent,
            path:'factnum',
        },
        {
            title: 'Component 24: "To Do Manager',
            component:  ToDoManagerComponent,
            path:'nugagawen',
        }






    


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
