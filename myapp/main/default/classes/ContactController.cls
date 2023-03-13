public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
        // public static List<Contact> getContactList() {
        //     return [
        //         SELECT Id, Name, Title, Phone, Email
        //         FROM Contact 
        //         WITH SECURITY_ENFORCED
        //         LIMIT 10
        //     ];
        // }
        //Apex method takes a string parameter called searchKey, and returns a list of contacts whose name contains the string
        public static List<Contact> findContacts(String searchKey){
            String key = '%' + searchKey + '%';
            return [
                SELECT Id, Name, Email, Phone
                FROM Contact
                WHERE Name LIKE :key
                WITH SECURITY_ENFORCED 
                LIMIT 10
            ];
        }
    public ContactController() {

    }
}