public class ContactListController {

    @AuraEnabled
    public static List<Contact> getContacts() {
        return [SELECT Id, Name, Email, Title, Phone, PhotoUrl FROM Contact WHERE Phone != null];
    }
}
