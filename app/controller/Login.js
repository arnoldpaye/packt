Ext.define('Packt.controller.Login', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Login'
    ],
    
    init: function(application) {
        this.control({
            'login form button#submit': {
                click: this.onButtonClickSubmit
            },
            'login form button#cancel': {
                click: this.onButtonClickCancel
            }
        });
    },
    
    onButtonClickSubmit: function(button, e, options) {
        console.log('login submit');
    },
    
    onButtonClickCancel: function(button, e, options) {
        console.log('login cancel');
    }
});