define([
    "dojo/declare",
    "app/views/First",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/layout/AccordionContainer",
    "dijit/layout/TabContainer",
    "app/views/ValidationForm"
], function(declare, First, BorderContainer, ContentPane, AccordionContainer, TabContainer) {
    return declare([BorderContainer], {
        postCreate: function() {
            this.inherited(arguments);
            this.addChild(new ContentPane({ title: "top", content: "Top" }));
            this.addChild(new ContentPane({ title: "left", content: "Left" }));
            this.addChild(new ContentPane({ title: "center", content: "Center" }));
            this.addChild(new ContentPane({ title: "right", content: "Right" }));
            this.addChild(new ContentPane({ title: "bottom", content: "Bottom" }));
        }
    });
});