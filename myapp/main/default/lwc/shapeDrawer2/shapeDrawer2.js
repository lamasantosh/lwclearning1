// shapes.js
import { LightningElement, track } from 'lwc';

export default class ShapeDrawer2 extends LightningElement {
    @track shapeOptions =[
        {   label: 'Circle', value: 'circle' },
        {   label: 'Square', value: 'square' },
        {   label: 'Rectangle', value: 'rectangle' },
        {   label: 'Triangle', value: 'triangle' },

    ];

    handleShapeChange(event){
        const selectedShape = event.target.value;
        console.log(selectedShape);
    }
}