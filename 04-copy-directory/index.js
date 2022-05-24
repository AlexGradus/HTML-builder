const fs=require('fs');
const path = require('path');
const {rm} = require('fs/promises');
let b=path.join(__dirname)+'/files';
let c=path.join(__dirname)+'/files-copy';

async function del(){
  await  rm(c, { force: true, recursive: true});

   
}

async function myF(){
  fs.mkdir(c,{recursive:true} ,err => {
    if(err) throw err; 
    console.log('Папка к вашим услугам!');
    fs.readdir(b,(err, files)=>{
      for(let i=0;i<files.length;i++){
        fs.copyFile(b+`/${files[i]}`,c+`/${files[i]}`, err =>{
          if(err) throw err; 
                    
        });
      }
        
    });
       
  });
}



const Conclusion=async()=>{
  await del();
  await  myF();
};
 
Conclusion();









