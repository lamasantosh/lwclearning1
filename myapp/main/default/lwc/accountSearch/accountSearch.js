import { LightningElement, api } from 'lwc';

export default class AccountSearch extends LightningElement {
    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
      }
      handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
      }
}