({
    openModel: function(component, event, helper) {
        component.set("v.isOpen", true);
        var dataUserId = event.target.getAttribute("data-userid");
        
        console.log("Create aaaaaaaaaaaaaaaaa: " + JSON.stringify(dataUserId));
     },
})


