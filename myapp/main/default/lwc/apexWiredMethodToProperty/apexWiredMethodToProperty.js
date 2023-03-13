import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';

const DELAY = 300;
export default class ApexWiredMethodToProperty extends LightningElement {
    // @wire(getContactList) contacts;
    searchKey = '';
    @wire(findContacts, { searchKey: '$searchKey' })
    contacts;
    handleKeyChange(event){
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}