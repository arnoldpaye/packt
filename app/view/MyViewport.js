Ext.define('Packt.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',
    
    requires:[
        'Packt.view.Header'
    ],

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'container',
            width: 185,
            collapsible: true,
            region: 'west',
            style: 'background-color: #8FB488;'
        },
        {
            xtype: 'appheader',
            region: 'north'
        },
        {
            xtype: 'container',
            region: 'center'
        },
        {
            xtype: 'container',
            region: 'south',
            height: 30
        }
    ]
});