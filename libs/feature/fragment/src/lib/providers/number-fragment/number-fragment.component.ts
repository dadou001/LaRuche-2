import { Component, Inject, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FRAGMENT, DefineFragment } from '../../fragment';
import { NumberFragment } from './number-fragment';
import { SoftEditorComponent } from '@laruche/shared/ui';
import { of } from 'rxjs';

@Component({
    selector: 'fragment-number',
    templateUrl: 'number-fragment.component.html',
    styleUrls: ['number-fragment.component.scss']
})
@DefineFragment({
    name: 'Number',
    constructor: NumberFragment,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Saepe doloremque quis ipsa corrupti voluptate sequi,
    consequatur odio voluptatum optio totam iste eius?
    Cum corporis consequatur nihil impedit atque unde quae?
    `,
})
export class NumberFragmentComponent implements OnInit, OnChanges {

    /*random number between min (included) and max (not included):*/
    randomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

    ngOnInit(): void {
        this.fragment.randomizer = false;
        this.fragment.exclude = false;
        this.fragment.intervalBool = false;
        this.fragment.interval = [0,100];
        this.fragment.excludeValues = [];
    }

    ngOnChanges(changes: SimpleChanges) {

        if (this.fragment.randomizer){
            while (this.fragment.excludeValues.includes(this.fragment.value)){
                this.fragment.value = this.randomNumber(this.fragment.interval[0], this.fragment.interval[1]);
            }
        }
    }


    constructor(
        @Inject(FRAGMENT)
        readonly fragment: NumberFragment
    ) {
    }

}
