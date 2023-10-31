import { LightningElement, api, wire, track } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';

export default class PicklistGet extends LightningElement {
    @api recordType;
    @api fieldApiName;
    @track relatedLists = [];
    @track errors;
    @track checkValue = [];
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
        fieldApiName: '$fieldApiName'
    })
    propertyPicklistValues({data,error}){
        if(data){
            this.relatedLists = data.values;
            console.log('this.relatedLists');
        }else if(error){
            this.error = error;
        }
    }
    get options(){
        let alist = [];
        this.relatedLists.forEach((element) => {
            alist.push({ label: element["label"], value: element["value"] });
        });
        return alist;
    }
    get selectedValues() {
        return this.checkValue.join(',');
    }
    handleChange(e) {
        if(e.target.checked){
            this.checkValue.push(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            //console.log(`variable x value: ${x}`);
        }else{
            //this.checkValue.pop(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            //console.log(`variable x value: ${x}`);
            this.checkValue.splice(x,1);
        }
    }
}