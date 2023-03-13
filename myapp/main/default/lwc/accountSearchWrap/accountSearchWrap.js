import { LightningElement } from 'lwc';

export default class AccountSearchWrap extends LightningElement {
    counter = 0;
    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
}