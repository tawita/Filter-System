({
    doInit : function(component, event, helper) {
        //var seb = component.get("v.Accounts");
        console.log("Seleted account in doint :");
        var action=component.get("c.getAccount");
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){
                component.set("v.Accounts",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },

   
   
     
})

