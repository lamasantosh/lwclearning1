import { LightningElement,wire, track, api } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';
import getTheCheckboxData from '@salesforce/apex/GetCheckboxValue.returnValue';

export default class DataSheet extends LightningElement {
    
    @track relatedLists = [];
    @track errors;
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
        fieldApiName: DATASHEET_PROPERTY_FIELD
    })
    propertyPicklistValues({data,error}){
        if(data){
            this.relatedLists = data.values;
            console.log('this.relatedLists');
        }else if(error){
            this.error = error;
        }
    }
    
    value = ['option1'];
    get options(){
        let alist = [];
        this.relatedLists.forEach((element) => {
            console.log('element start');
            alist.push({ label: element["label"], value: element["value"] });
        });
        return alist;
    }

}