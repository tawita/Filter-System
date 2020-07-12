({
    onFormSubmit : function(component, event, helper) {    
        const selectedOptions = component.find("jobLocationMS").get("v.selectedOptions");
        //console.log("aaaabbbb " + JSON.stringify(selectedOptions));
        component.set("v.select",[false,false,false,false]);
            for(var i=0;i<4;i++){
                console.log("aaaabbbb " + JSON.stringify(selectedOptions[i].Name));
                if(selectedOptions[i].Name == "Name"){
                    //console.log("aaaabbbb" + JSON.stringify(selectedOptions.Name));
                    component.set("v.select[0]",true);
                }
        
                if(selectedOptions[i].Name == "Phone"){
                    component.set("v.select[1]",true);
                }
        
                if(selectedOptions[i].Name == "Rating"){
                    component.set("v.select[2]",true);
                }
                
                if(selectedOptions[i].Name == "Type"){
                    component.set("v.select[3]",true);
                }

                if(selectedOptions[i].Name == "All"){
                    component.set("v.select",[true,true,true,true]);
                }
        
            }
        
    }
        
})
