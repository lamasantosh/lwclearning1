public with sharing class ContactController {
    public class jibunNoList{
        public String Name{get;set;}
        public Date hidzuke{get;set;}
        public String kikaiMei{get;set;}
        public String danmen{get;set;}
    }
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
    @AuraEnabled(cacheable = true)
    public static List<datasheet__c> findDatasheet(String param1, String param2){
        system.debug(param1);
        system.debug(param2);
        system.debug('inside apex version');
        Date selDate = Date.valueOf(param1);
        return [
            SELECT Id, Name, hidzuke__c, pre_process_cutmachine_name__c, danmen__c 
            FROM datasheet__c
            WHERE hidzuke__c = :selDate
            AND pre_process_cutmachine_name__c = :param2
            LIMIT 10
        ];
    }
    @AuraEnabled(cacheable = true)
    public static List<datasheet__c> findDatasheet2(String param1, String param2){
        system.debug(param1);
        system.debug(param2);
        system.debug('inside apex version');
        Date selDate = Date.valueOf(param1);
        List<datasheet__c> makeList1 = new List<datasheet__c>();
        List<jibunNoList> makeList2 = new List<jibunNoList>();
        makeList1 = [SELECT Id, Name, hidzuke__c, pre_process_cutmachine_name__c, danmen__c 
        FROM datasheet__c
        WHERE hidzuke__c = :selDate
        AND pre_process_cutmachine_name__c = :param2
        LIMIT 10];
        for(datasheet__c ds: makeList1){
            if(ds.danmen__c != Null){
                String richTextAreaContent = ds.danmen__c;
                Pattern pattern = Pattern.compile('<img[^>]+src\\s*=\\s*["\']([^"\']+)["\']');
                Matcher matcher = pattern.matcher(richTextAreaContent);
                while (matcher.find()){
                    String imageUrl = matcher.group(1);
                    imageUrl = imageUrl.replaceAll('&amp;', '&');
                    ds.danmen__c = imageUrl;
                }
            }
        }
        return makeList1;
    }
}