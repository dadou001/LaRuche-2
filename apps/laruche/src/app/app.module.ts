// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { SharedVendorsModule } from '@laruche/shared/vendors';
import { FeatureFragmentModule } from '@laruche/feature/fragment';

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

        SharedVendorsModule,
        FeatureFragmentModule.forRoot(),

        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
