import { Component, HostListener, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'ui-soft-editor',
  templateUrl: 'soft-editor.component.html',
  styleUrls: ['soft-editor.component.scss']
})
export class SoftEditorComponent implements OnInit {

    public item: any []
    private text: string;


    ngOnInit(): void {
    }

    createEmbed(event: string){
      const element = event;
        this.item.push(element);
        console.log('embed');
    }
}