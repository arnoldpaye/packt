Ext.define('Packt.view.Header', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.appheader',
    
    height: 30,
    ui: 'footer',
    style: 'border-bottom: 4px solid #4c72a4;',
    
    items: [
        {
            xtype:'label',
            html: '<div id="titleHeader">Vide Store Manager<span style="font-size:!2px;">Powered by EXT JS</span></div>'
        },
        {
            xtype: 'tbfill'
        },
        {
            xtype: 'tbseparator'
        },
        {
            xtype: 'button',
            text: 'Logout',
            itemId: 'logout',
            iconCls: 'logout'
        }
    ]
});