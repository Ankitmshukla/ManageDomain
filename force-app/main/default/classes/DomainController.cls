public with sharing class DomainController {
    @AuraEnabled(cacheable=true)
    public static List<Domain__c> domainList() {
        return [
            SELECT Id,Name__c, Domain__c, Third_Party_Domain__c
            FROM Domain__c
            WITH SECURITY_ENFORCED
        ];
        //throw new AuraHandledException('Forced error');
    }
}