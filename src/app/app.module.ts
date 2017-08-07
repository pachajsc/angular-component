import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from '../../src/app/library/tabs/tabs.component';
import { TableComponent } from '../../src/app/library/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
