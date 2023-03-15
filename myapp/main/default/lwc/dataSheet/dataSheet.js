import { LightningElement,wire, track, api } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';
import DATASHEET_surveyingQualificationInput_FIELD from '@salesforce/schema/datasheet__c.surveyingQualificationInput__c';
//import SAMPLE_CSS from '@salesforce/resourceUrl/rep_sr_datatableStyles';

import getTheCheckboxData from '@salesforce/apex/GetCheckboxValue.returnValue';

export default class DataSheet extends LightningElement {

    @track relatedLists = [];
    @track value1 = [];
    @track errors;
    
    @wire(getPicklistValues, { 
        recordTypeId: '012000000000000AAA',
        fieldApiName: DATASHEET_PROPERTY_FIELD
    })
    propertyPickListValues;
    // propertyPicklistValues({data,error}){
    //     if(data){
    //         this.relatedLists = data.values;
    //     }else if(error){
    //         this.error = error;
    //     }
    // }
    
    get options(){
        let alist = [];
        this.relatedLists.forEach((element) => {
            alist.push({ label: element["label"], value: element["value"] });
        });
        return alist;
    }

    //shadow Dom
    renderedCallback(){
        //Promise.all([loadStyle(this, SAMPLE_CSS)]);
        console.log("it is called ");
        let forCheckCss = document.querySelectorAll('.slds-form-element__control');
        forCheckCss.forEach((nodeList)=> {
            console.log(nodeList)
        }
        );
        //console.log('check for the check css' + forCheckCss);
        //forCheckCss.classList.contains('sldx-checkbox').remove("slds-checkbox");
    }
}