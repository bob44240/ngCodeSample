import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Hero3MaterialModule} from './materialModules';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Hero3MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
