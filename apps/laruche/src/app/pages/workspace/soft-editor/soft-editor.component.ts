import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-editor',
  templateUrl: 'soft-editor.component.html',
  styleUrls: ['soft-editor.component.scss']
})
export class SoftEditorComponent  {
  str = 'truc';

  onNameChange(val: any) {
    console.log('Changed', val)
  }
}