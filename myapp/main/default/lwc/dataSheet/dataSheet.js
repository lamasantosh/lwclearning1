import { LightningElement,wire, track, api } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';

//import getTheCheckboxData from '@salesforce/apex/GetCheckboxValue.returnValue';
import getPicklistValuess from '@salesforce/apex/GetCheckboxValue.getPicklistValues';
import getinvestigatorQualificationMeasurement from '@salesforce/apex/GetCheckboxValue.getinvestigatorQualificationMeasurement';
export default class DataSheet extends LightningElement {
    
    relatedLists = [];
    relatedLists2 = [];
    @track showDependentField = false;
    @track errors;
    @track checkValue = [];
    @wire(getPicklistValuess) 
    picklistValues({error,data}){
        if(error){
            this.error = error;
        }else if(data){
            this.relatedLists = data;
             console.log(this.relatedLists);
        }
    }
    @wire(getinvestigatorQualificationMeasurement)
    picklistValues2({error,data}){
        if(error){
            this.error = error;
        }else if(data){
            this.relatedLists2 = data;
        }
    }
    get options(){
        let alist = [];
        this.relatedLists.forEach((element) => {
             alist.push({ label: element, value: element });
        });
        return alist;
    }
    get investigatorQualificationMeasurement(){
        let alist = [];
        this.relatedLists2.forEach((element) => {
             alist.push({ label: element, value: element });
        });
        return alist; 
    }
    //@track selectedValues = [];
    // @wire(getPicklistValues, { 
    //     recordTypeId: '012000000000000AAA',
    //     fieldApiName: DATASHEET_PROPERTY_FIELD
    // })
    // propertyPicklistValues({data,error}){
    //     if(data){
    //         this.relatedLists = data.values;
    //         console.log('this.relatedLists');
    //     }else if(error){
    //         this.error = error;
    //     }
    // }
    // get options(){
    //     let alist = [];
    //     this.relatedLists.forEach((element) => {
    //         alist.push({ label: element["label"], value: element["value"] });
    //     });
    //     return alist;
    // }
    get selectedValues() {
        return this.checkValue.join(',');
    }
    handleChange(e) {
        if(e.target.checked){
            this.checkValue.push(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            console.log(e.target.value);
            if (e.target.value === '測量士') {
                this.showDependentField = true;
                console.log(this.showDependentField);
              } 
            //console.log(`variable x value: ${x}`);
        }else{
            //this.checkValue.pop(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            //console.log(`variable x value: ${x}`);
            this.checkValue.splice(x,1);
            if (e.target.value === '測量士') {
                this.showDependentField = false;
                console.log(this.showDependentField);
              } 
        }
    }
}