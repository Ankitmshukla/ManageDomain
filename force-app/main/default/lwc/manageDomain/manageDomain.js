import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import DOMAIN_OBJECT from '@salesforce/schema/Domain__c';
import NAME_FIELD from '@salesforce/schema/Domain__c.Name__c';
import DOMAIN_FIELD from '@salesforce/schema/Domain__c.Domain__c';
import THIRD_PARTY_DOMAIN_FIELD from '@salesforce/schema/Domain__c.Third_Party_Domain__c';
export default class ManageDomain extends LightningElement {
    objectApiName = DOMAIN_OBJECT;
    fields = [NAME_FIELD, DOMAIN_FIELD, THIRD_PARTY_DOMAIN_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Domain created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}