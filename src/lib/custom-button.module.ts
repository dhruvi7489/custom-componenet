import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  declarations: [CustomButtonComponent],
  imports: [
    BrowserModule
  ],
  exports: [CustomButtonComponent]
})
export class NgCustomButtonModule { }
