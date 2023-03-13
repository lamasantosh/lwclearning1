import { LightningElement } from 'lwc';

export default class HelloExpressions extends LightningElement {
    firstName = '';
    lastName = '';  
      handleChange(event){
        const fullname = event.target.name;
        if(fullname === 'firstName'){
            this.firstName = event.target.value;
        }else if(fullname === 'lastName'){
            this.lastName = event.target.value;
        }
      }

      get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
      }
}