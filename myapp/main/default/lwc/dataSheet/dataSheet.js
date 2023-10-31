import { LightningElement,wire, track, api } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import DATASHEET_PROPERTY_FIELD from '@salesforce/schema/datasheet__c.property__c';

//import getTheCheckboxData from '@salesforce/apex/GetCheckboxValue.returnValue';
import getPicklistValuess from '@salesforce/apex/GetCheckboxValue.getPicklistValues';
import getinvestigatorQualificationMeasurement from '@salesforce/apex/GetCheckboxValue.getinvestigatorQualificationMeasurement';
import getPreProcessCutMachineName from '@salesforce/apex/GetCheckboxValue.getPreProcessCutMachineName';
import findDatasheet from '@salesforce/apex/ContactController.findDatasheet';
import findDatasheet2 from '@salesforce/apex/ContactController.findDatasheet2';
export default class DataSheet extends LightningElement {
    
    relatedLists = [];
    relatedLists2 = [];
    relatedLists3 = [];
    @track showDependentField = false;
    @track errors;
    @track checkValue = [];
    //this will hold the value of the date which is choosen by the user
    @track selectedDate;
    //this will hold the value each time the kikai mei has changed by the user
    @track selectedKikai;
    //this will hold the picklist value of the surveyDataSheets
    @track dataSheetOptions = [];
    @track data = [];
    @track data2 = [];

    columns = [
        { label: 'datasheet Name', fieldName: 'Name'},
        { label: '日付', fieldName: 'hidzuke__c', type: 'date'},
        { label: '前工程（切断）機械名', fieldName: 'pre_process_cutmachine_name__c', type: 'text'},
        {
            label: 'Image',
            fieldName: 'ImageUrlField',
            type: 'url',
            typeAttributes: { target: '_blank' }
        },
        {
            label: 'Edit',
            type: 'button',
            typeAttributes: {
                label: 'Edit',
                title: 'Edit',
                name: 'edit',
                value: 'edit'
            },
            cellAttributes: {
                class: 'slds-theme_default'
            }
        },
        {
            label: 'Delete',
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                title: 'Delete',
                name: 'delete',
                value: 'delete'
            },
            cellAttributes: {
                class: 'slds-theme_default'
            }
        }

    ];

    handleRowAction(event) {
        const action = event.detail.action;
        const row = event.detail.row;

        switch (action.name) {
            case 'edit':
                this.editRecord(row.Id);
                break;
            case 'delete':
                this.deleteRecord(row.Id);
                break;
            default:
                break;
        }
    }
    editRecord(recordId) {
        console.log(recordId);
    }
    deleteRecord(recordId){
        console.log(recordId);
    }
    @wire(getPicklistValuess) 
    picklistValues({error,data}){
        if(error){
            this.error = error;
        }else if(data){
            this.relatedLists = data;
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
    @wire(getPreProcessCutMachineName)
    picklistValues3({error,data}){
        console.log('you are inside picklistvalue3 change ddd');
        if(error){
            this.error = error;
        }else if(data){
            this.relatedLists3 = data;
        }
    }
    transformData(data) {
        return data.map(element => ({label: element, value: element}));
    }
    get options(){
       return this.transformData(this.relatedLists);
    }
    get investigatorQualificationMeasurement(){
        return this.transformData(this.relatedLists2);
    }
    get kikaiMeiOptions(){
        return this.transformData(this.relatedLists3);
    }
    get selectedValues() {
        return this.checkValue.join(',');
    }
    handleChange(e) {
        if(e.target.checked){
            this.checkValue.push(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            if (e.target.value === '測量士') {
                this.showDependentField = true;
              } 
            //console.log(`variable x value: ${x}`);
        }else{
            //this.checkValue.pop(e.target.value);
            var x = this.checkValue.indexOf(e.target.value);
            //console.log(`variable x value: ${x}`);
            this.checkValue.splice(x,1);
            if (e.target.value === '測量士') {
                this.showDependentField = false;
              } 
        }
    }

    handleKikaiOptions(event){
        this.selectedKikai = event.target.value;
        console.log(this.selectedKikai);
    }
    handleDateChange(event) {
        this.selectedDate = event.target.value;
        if(this.selectedKikai){
            let holdValues = [];
            findDatasheet({ param1: this.selectedDate, param2: this.selectedKikai })
            .then(result => {
                result.forEach(record => {
                    console.log('record items' + record.Name);
                    holdValues.push({ label: record.Name, value: record.Name });
                });
                console.log('holdvalues' + holdValues);
                this.dataSheetOptions = holdValues;
                console.log('this.ddata' + this.dataSheetOptions);
                this.data = result.map(record => ({
                    Id: record.Id,
                    Name: record.Name,
                    hidzuke__c: record.hidzuke__c,
                    pre_process_cutmachine_name__c: record.pre_process_cutmachine_name__c,
                    ImageUrlField: this.extractImageFromRichText(record.danmen__c)
                }));
            })
            .catch(error => {
                console.log('apex error ', error);
            })
        }else{
            console.log('selected kikai is not or undefined');
        }
        // You can use this.selectedDate to work with the selected date value.
    }
    extractImageUrlFromHtml(htmlString) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');
        const imgElement = doc.querySelector('img');

        if(imgElement) {
            const imageUrl = imgElement.getAttribute('src');
            return imageUrl;
        }else {
            return '';
        }
    }
    handleDatasheetOptions(event){
        this.selectedDate = this.selectedDate;
        console.log('selected-date' + this.selectedDate);
        console.log('selected kikai mei ' + this.selectedKikai);
        if(this.selectedKikai){
            findDatasheet2({ param1: this.selectedDate, param2: this.selectedKikai })
            .then(result => {
                console.log('result fasldj' + result);
                this.data2 = result;
                console.log('data2', this.data2);
                // result.forEach(record => {
                //     record.danmen__c = this.extractImageUrlFromHtml(record.danmen__c);
                // });
                // result.forEach(record => {
                //     console.log(record.Name);
                //     console.log(record.hidzuke__c);
                //     console.log(record.pre_process_cutmachine_name__c);
                //     console.log(record.danmen__c);
                // });
            })
            .catch(error => {
                console.log('apex error ', error);
            })
        }else{
            console.log('selected kikai is not or undefined');
        }
    }
    //Helper method to extract image URL from rich text
    extractImageFromRichText(richTextField) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(richTextField, 'text/html');
        const imgElement = doc.querySelector('img');

        return imgElement ? imgElement.getAttribute('src') : '';
    }
    
}