import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Hero3MaterialModule} from './materialModules';

import { AppComponent } from './app.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { HotComponent } from './components/hot/hot.component';


@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    HotComponent
  ],
  imports: [
    BrowserModule,
    Hero3MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
