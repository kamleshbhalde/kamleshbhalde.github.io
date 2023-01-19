import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimesheetComponent } from './periods/timesheet/timesheet.component';
import { AddperiodComponent } from './periods/addperiod/addperiod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallbackPipe } from './callback.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    AddperiodComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
