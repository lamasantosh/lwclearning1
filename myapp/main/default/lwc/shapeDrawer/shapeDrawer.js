import { LightningElement } from 'lwc';

export default class ShapeDrawer extends LightningElement {

    shapeType = 'rectangle';
    width = 0;
    height = 0;
    radius = 0;
    side1 = 0;
    side2 = 0;
    side3 = 0;

    handleShapeTypeChange(event) {
        this.shapeType = event.target.value;
    }

    handleWidthChange(event) {
        this.width = event.target.value;
    }

    handleHeightChange(event) {
        this.height = event.target.value;
    }

    handleRadiusChange(event) {
        this.radius = event.target.value;
    }

    handleSide1Change(event) {
        this.side1 = event.target.value;
    }

    handleSide2Change(event) {
        this.side2 = event.target.value;
    }

    handleSide3Change(event) {
        this.side3 = event.target.value;
    }

    handleDrawClick() {
        const canvas = this.template.querySelector('.canvas');
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);

        if(this.shapeType === 'rectangle') {
            context.fillRect(0, 0, this.width, this.height);
        } else if(this.shapeType === 'circle') {
            context.beginPath();
            context.arc(canvas.width/2, canvas.height/2, this.radius, 0, 2*Math.PI);
            context.fill();
        } else if(this.shapeType === 'triangle') {
            context.beginPath();
            context.moveTo(canvas.width/2, 0);
            context.lineTo(canvas.width, canvas.height);
            context.lineTo(0, canvas.height);
            context.closePath();
            context.fill();
        }
    }

    get isRectangle() {
        return this.shapeType === 'rectangle';
    }

    get isCircle() {
        return this.shapeType === 'circle';
    }

    get isTriangle() {
        return this.shapeType === 'triangle';
    }

}
