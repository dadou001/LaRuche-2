import { BaseFragment, FragmentConstructorArgs } from '../../fragment';

export class TextFragment extends BaseFragment {
    text: string;

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

