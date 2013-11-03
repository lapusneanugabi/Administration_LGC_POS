Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Administrare LGC_POS',
                    html : 'Hello! Welcome to Ext JS.'
                }
            ]
        });
    }
});