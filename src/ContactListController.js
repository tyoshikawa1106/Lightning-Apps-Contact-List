({
    doInit : function(component, event, helper) {
        console.log('doInit:start');
        var action = component.get("c.getContacts");
        action.setCallback(this, function(data) {
            component.set("v.contacts", data.getReturnValue());
        });
        $A.enqueueAction(action);
        console.log('doInit:end');
    }
})