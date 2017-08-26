import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // para que funcionen las animaciones
import { AppComponent } from './app.component';
import { TabsComponent } from '../../src/app/library/tabs/tabs.component';
import { TableComponent } from '../../src/app/library/table/table.component';
import { TestComponent } from './library/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
