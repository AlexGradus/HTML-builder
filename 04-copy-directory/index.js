const fs=require('fs');
const path = require('path');
let b=path.join(__dirname)+'/files';
let c=path.join(__dirname)+'/files-copy';

async function del(){
   await fs.readdir(c,(err, files)=>{
        for(let i=0;i<files.length;i++){
            fs.rm(c+ `/${files[i]}`,err => {if(err) throw err; } );
            }});

   
}

async function myF(){
     fs.stat(c, function(err) {
        if (!err) {
            
            del();
            fs.mkdir(c,{recursive:true} ,err => {
                if(err) throw err; 
                console.log('Папка к вашим услугам!');
                fs.readdir(b,(err, files)=>{
                    for(let i=0;i<files.length;i++){
                        fs.copyFile(b+`/${files[i]}`,c+`/${files[i]}`, err =>{
                            if(err) throw err; 
                            
                        });
                    }
                
                })
               
            });
            
           
        }
        else if (err.code === 'ENOENT') {
            
            fs.mkdir(c,{recursive:true} ,err => {
                if(err) throw err; 
                console.log('Папка к вашим услугам!');
                fs.readdir(b,(err, files)=>{
                    for(let i=0;i<files.length;i++){
                        fs.copyFile(b+`/${files[i]}`,c+`/${files[i]}`, err =>{
                            if(err) throw err; 
                            
                        });
                    }
                
                })
               
            });
            
        }
    });
}
myF();









