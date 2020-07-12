public with sharing class dataAccount {
    @AuraEnabled
    public static List<Account> getAccount() {
       return [select Name,Phone,Rating,Type,picture__c from Account];
    } 
}
