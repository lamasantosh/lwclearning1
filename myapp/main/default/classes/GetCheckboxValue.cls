public class GetCheckboxValue {
    @AuraEnabled(cacheable=true)
    public static List<String> getPicklistValues() {
        List<String> options = new List<String>();
        Schema.DescribeFieldResult fieldResult01 = surveyDataSheets__c.investigatorQualificationErLevel__c.getDescribe();
        List<Schema.PicklistEntry> pickListEntry01 = fieldResult01.getPicklistValues();

        for (Schema.PicklistEntry entry : pickListEntry01) {
            options.add(entry.getLabel());
        }
        return options;
    }
    @AuraEnabled(cacheable=true)
    public static List<String> getinvestigatorQualificationMeasurement() {
        List<String> options = new List<String>();
        Schema.DescribeFieldResult fieldResult01 = surveyDataSheets__c.investigatorQualificationMeasurement__c.getDescribe();
        List<Schema.PicklistEntry> pickListEntry01 = fieldResult01.getPicklistValues();

        for (Schema.PicklistEntry entry : pickListEntry01) {
            options.add(entry.getLabel());
        }
        return options;
    }
    @AuraEnabled(cacheable=true)
    public static list<String> getPreProcessCutMachineName(){
        List<String> options = new List<String>();
        Schema.DescribeFieldResult fieldResult01 = datasheet__c.pre_process_cutmachine_name__c.getDescribe();
        List<Schema.PicklistEntry> pickListEntry01 = fieldResult01.getPicklistValues();

        for (Schema.PicklistEntry entry : pickListEntry01) {
            options.add(entry.getLabel());
        }
        return options;
        
    }


    /*@AuraEnabled(cacheable = true)
    public static list<datasheet__c> getSoqlData(){
        list<datasheet__c> soqlData = new List<datasheet__c>();
        soqlData = [SELECT Name, property__c, pre_process_cutmchine_name__c, hidzuke__c
                    FROM datasheet__c
                    WHERE ];
    }*/
        //Create a variable for datasheet data to enter
        // datasheet__c ds = new datasheet__c();
        // public class Selection {
        //     public String label{get; set;}
        //     public String value{get; set;}
        //     public Boolean check{get; set;}
        //     public Selection(String label, String value, Boolean check) {
        //         this.label = label;
        //         this.value = value;
        //         this.check = check;
        //     }
        // } 
            //4. Investigator Qualification/Civil Engineering Construction management system - logged in Users -checkboxes /土木施工管理技士
            //public List<Selection> investigatorQualificationErLevel{get; set;}
    
            //5. Investigator Qualification/ Surveying Qualification - logged in Users /測量資格
           // public List<Selection> investigatorQualificationMeasurement{get; set;}

            // public getCheckboxValue(){
            //     this.propertyClassificationInput = new List<Selection>();
            //     this.investigatorQualificationErLevel = new List<Selection>();


            //     Schema.DescribeFieldResult fieldResult01 = surveyDataSheets__c.investigatorQualificationErLevel__c.getDescribe();
            //     List<Schema.PicklistEntry> pickListEntry01 = fieldResult01.getPicklistValues();
            //     for(integer i=0; i<pickListEntry01.size(); i++){
            //         System.debug('investigatorQualificationErLevel' + pickListEntry01[i].getValue());
            //         Selection selection = new Selection(pickListEntry01[i].getValue(), pickListEntry01[i].getLabel(),false);
            //         this.investigatorQualificationErLevel.add(selection); 
            //         }//end bracket of pickListEntry01
            // }

}