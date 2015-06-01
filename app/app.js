/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

Ext.application({
    
    name: 'Packt',
    
    requires: [
        'Packt.view.Login'
    ],
    
    views: [
        'Login'
    ],
    
    init: function() {
        
        splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
        
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
        
    },
    
    launch: function() {
        var task = new Ext.util.DelayedTask(function() {
            
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });
            
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });
        });
        
        task.delay(2000);
    }
});
