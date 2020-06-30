import { BaseFragment, FragmentConstructorArgs } from '../../fragment';

export class NumberFragment extends BaseFragment {
    value: number;
    randomizer: boolean;
    exclude: boolean;
    intervalBool: boolean;
    interval: number[];
    excludeValues: number[];

    constructor(args: FragmentConstructorArgs) {
        super(args);
    }

    toHtml() {
        return '';
    }

    toScript() {
        return '';
    }
}

