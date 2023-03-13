import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {

    page = 1;
    previousHandler(){
        if(this.page > 1){
            this.page = this.page - 1;
        }
    console.log('previous' + page);
    }
    nextHandler() {
        this.page = this.page + 1;
        console.log('next' + page);
    }
}