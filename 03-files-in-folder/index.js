const fs = require('fs');

const path = require('path');
let b=path.join(__dirname,'secret-folder');


fs.readdir(b, {withFileTypes: true},(err, files)=>{
    let Array=[];
    for(let i=0;i<files.length;i++){
        if(files[i].isFile()){
            Array.push(files[i]);
        }
    } 
   
      
     
      for(let i=0;i<Array.length;i++){
        fs.stat((b+`/${Array[i].name}`), (err, stats) => {
            let J=Array[i].name.split('.');
            console.log(`${J[0]}-${J[1]}-${stats.size}b`);
          });
      }
});

