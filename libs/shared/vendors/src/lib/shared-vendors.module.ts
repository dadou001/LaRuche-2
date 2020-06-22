import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { QuillModule } from 'ngx-quill';



@NgModule({
  imports: [
    QuillModule.forRoot({}),
    SweetAlert2Module.forRoot(),
  ],
  exports: [
    QuillModule,
    SweetAlert2Module
  ]
})
export class SharedVendorsModule {}
