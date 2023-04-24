import { LightningElement, api } from 'lwc';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';

export default class EditRecordUsingBaseComponent extends LightningElement {
    @api recordId = '0030p00000eCHr8AAG';
    @api objectApiName;
    
}