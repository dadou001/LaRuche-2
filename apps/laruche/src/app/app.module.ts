// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { SharedVendorsModule, MaterialModule } from '@laruche/shared/vendors';
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
        MaterialModule,
        FeatureFragmentModule.forRoot(),

        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
