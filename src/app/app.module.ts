// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { QuillModule } from 'ngx-quill';
import { FragmentModule } from './libs/fragments/fragment.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// MODULE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        QuillModule.forRoot({}),
        SweetAlert2Module.forRoot(),
        FragmentModule.forRoot(),

        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
