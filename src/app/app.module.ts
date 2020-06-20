// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { QuillModule } from 'ngx-quill';
import { FragmentModule } from './libs/fragments/fragment.module';

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
        FragmentModule.forRoot(),

        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
