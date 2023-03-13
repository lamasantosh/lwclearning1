import { LightningElement, wire, api } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class Sample extends LightningElement {
    @api sendData;
    @api errors;
    // @api relatedLists;
    // @wire(getPicklistValues, { 
    //     recordTypeId: '012000000000000AAA',
    //     fieldApiName: DATASHEET_PROPERTY_FIELD
    // })
    // propertyPicklistValues({data,error}){
    //     console.log('data shown');
    //     if(data){
    //         console.log("data available")
    //         console.log(data.values);
    //         this.relatedLists = data.values;
    //     }else if(error){
    //         this.error = error;
    //         console.log("it has error");
    //         console.log('ERROR =>', error, JSON.stringify(error));
    //     }
    // }

    value=['option1'];
    handleChange(event){
        const changeValue = event.detail.value;
        //alert("hello" + propertyPicklistValues);
        console.log("you click me");
    }

}