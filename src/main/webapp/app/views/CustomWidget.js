require([
    "dojo/_base/declare", "dojo/parser", "dojo/ready",
    "dijit/_WidgetBase",
], function(declare, parser, ready, _WidgetBase){

    declare("CustomWidget", [_WidgetBase], {
        // put methods, attributes, etc. here
    });
    ready(function() {
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        parser.parse();
    });
});