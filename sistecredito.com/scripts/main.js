/*global jQuery, window*/
(function ($){
    function _constructor () {
        //obtener tamaño de la ventana del navegador
        sc_obtenerTamVentana();    
        //Centrar sub menus
        sc_centrar_submenus();
    }
    
    function sc_obtenerTamVentana () {
        var wind = $(window);
        var content = $('#sc-contendor-ppal');
        
        var windHeight = wind.height();
        
        wind.on('resize', function () {
            var wind = $(window);
            windHeight = wind.height();
            
            content.css({height: windHeight});    
        });
        
        content.css({height: windHeight});
    }
    
    function sc_centrar_submenus () {
        var win = $(window);
        var sub = $('.navbar-nav .navbar-nav');
        
        if(sub.length > 0){
           var centrar_sub = function ( item ) {
               var subTam = item.width();
               var padreSub = item.parent();
               var padreTam = padreSub.width();
               
               var centrarA = (subTam - padreTam)/2;
                   item.css({left: '-'+centrarA+'px'});
               
           }
           
           sub.each(function ( index, item ) {
               var elem = $(item);
                   centrar_sub(elem);
                   win.on('resize',function () {
                       centrar_sub(elem);
                   });
           });
        }
    }
    
    _constructor();
})(jQuery);