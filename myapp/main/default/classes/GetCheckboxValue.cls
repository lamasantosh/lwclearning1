public with sharing class GetCheckboxValue {
    @AuraEnabled(cacheable=true)
    public static String returnValue() {
        return 'success';
    }
}