import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
//import WEBSITE_FIELD from '@salesforce/schema/Account/Website';

export default class CreateRecordUsingBaseComponent extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    ratingField = RATING_FIELD;
    
    handleAccountCreated(){
        //it will run when account is created.
    }
}