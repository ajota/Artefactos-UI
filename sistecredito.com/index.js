var sass = require('node-sass');
var fs = require('fs');

function rendersass () {
    sass.render({
      file: './scss/custom.scss',
      outFile: './css/custom.css'
    }, function(err1, result) { 
        if(!err1){
          fs.writeFile('./css/custom.css', result.css, function(err){
            if(!err){
             console.info('Revision y Traspilacion exitosa');
            }
          });
        }else{
            console.log(err1); 
        }
    });
};

fs.watch('./scss/', rendersass);

rendersass();
