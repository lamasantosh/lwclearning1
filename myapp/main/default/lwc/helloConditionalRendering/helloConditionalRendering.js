import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    changeTheValue;

    checkValue(event){
        //console.log(event);
        this.changeTheValue = event.target.checked;
    }
}