import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'ui-soft-editor',
  templateUrl: 'soft-editor.component.html',
  styleUrls: ['soft-editor.component.scss']
})
export class SoftEditorComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  str = 'truc';

  onNameChange(val: any) {
    console.log('Changed', val)
  }
}