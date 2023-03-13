import { LightningElement, api } from 'lwc';

export default class ViewSource extends LightningElement {
    baseURL =
    'https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/';

@api source;

get sourceURL() {
    console.log('this is source variable' + this.source);
    return this.baseURL + this.source;
}
}