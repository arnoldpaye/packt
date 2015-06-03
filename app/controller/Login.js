Ext.define('Packt.controller.Login', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'Packt.util.MD5'
    ],
    
    views: [
        'Login',
        'authentication.CapsLockTooltip'
    ],
    
    refs: [
        {
            ref: 'capslockTooltip',
            selector: 'capslocktooltip'
        }
    ],
    
    init: function(application) {
        this.control({
            'login form button#submit': {
                click: this.onButtonClickSubmit
            },
            'login form button#cancel': {
                click: this.onButtonClickCancel
            },
            'login form textfield': {
                specialkey: this.onTextfieldSpecialKey
            },
            'login form textfield[name=password]': {
                keypress: this.onTextfieldKeyPress
            }
        });
    },
    
    onButtonClickSubmit: function(button, e, options) {
        var formPanel = button.up('form'),
            login = button.up('login'),
            user = formPanel.down('textfield[name=user]').getValue(),
            pass = formPanel.down('textfield[name=password]').getValue();
            
            pass = Packt.util.MD5.encode(pass);
            if (formPanel.getForm().isValid()) {
                /*Ext.Ajax.request({
                    url: 'php/login.php',
                    params: {
                        user: user,
                        password: pass
                    },
                    success: function(conn, response, options, eOpts) {
                        Ext.get(login.getEl()).unmask();
                    },
                    failure: function(conn, response, options, eOpts) {
                        Ext.Msg.show({
                            title: 'Error!',
                            msg: conn.responseText,
                            icon: Ext.Msg.ERROR,
                            buttons: Ext.Msg.OK
                        });
                    }
                });
                
                Ext.get(login.getEl()).mask('Autenticating...');*/
                login.close();
                Ext.create('Packt.view.MyViewport');
            }
    },
    
    onButtonClickCancel: function(button, e, options) {
        button.up('form').getForm().reset();
    },
    
    onTextfieldSpecialKey: function(field, e, options) {
        if (e.getKey() == e.ENTER) {
            var submitBtn = field.up('form').down('button#submit');
            submitBtn.fireEvent('click', submitBtn, e, options);
        }
    },
    
    onTextfieldKeyPress: function(field, e, options) {
        var charCode = e.getCharCode();
        
        if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||
        (!e.shiftKey && charCode >= 65 && charCode <= 90)) {
            
            if (this.getCapslockTooltip() === undefined) {
                Ext.widget('capslocktooltip');
            }
            
            this.getCapslockTooltip().show();
        } else {
            if (this.getCapslockTooltip() !== undefined) {
                this.getCapslockTooltip().hide();
            }
        }
    }
});