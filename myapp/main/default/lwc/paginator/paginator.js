import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    previousHandler() {
        console.log('child previous');
        this.dispatchEvent(new CustomEvent('previous'));
    }

    nextHandler() {
        console.log('child next');
        this.dispatchEvent(new CustomEvent('next'));
    }
}