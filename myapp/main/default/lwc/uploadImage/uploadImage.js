import { LightningElement, api } from 'lwc';

export default class UploadImage extends LightningElement {
    @api recordId;

    handleImageUpload(event){
        let uploadFiles = event.detail.files;
    }
}