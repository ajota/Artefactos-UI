/*global jQuery, window*/
(function ($){
    function _constructor () {
        //obtener tamaño de la ventana del navegador
        sc_obtenerTamVentana();    
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
    
    _constructor();
})(jQuery);