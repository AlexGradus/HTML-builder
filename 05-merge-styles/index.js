const fs = require('fs');

const path = require('path');
let b=path.join(__dirname)+'/styles';
let r=path.join(__dirname)+'/project-dist/bundle.css';



 function Write(i,c){
    
     fs.readFile( b+`/${i}`, 'utf-8',(err,data) =>{
        if(err) throw err;
         c.push(data);
         fs.writeFile( r, c.join(''),(err) => {
            if (err)
              console.log(err);})
     })
}
 function del(){
    fs.stat(r, function(err) {
        if (!err) {
            fs.rm(r,err => {if(err) throw err; } );
        }})
         
         }


const p=new Promise(function(resolve,reject){
    del();
    resolve();
});


p.then(()=>{fs.readdir(b, {withFileTypes: true},(err, files)=>{
    let Written=[];
    let Array=[];
    let ArrayCSS=[];
    for(let i=0;i<files.length;i++){
        if(files[i].isFile()){
            Array.push(files[i]);
        }
    } 
   
      
     
      for(let i=0;i<Array.length;i++){
            if (path.extname(Array[i].name)==='.css'){
                ArrayCSS.push(Array[i].name);
            }

        }
        for(let i=0;i<ArrayCSS.length;i++){
            Write(ArrayCSS[i],Written);
            
            
        }
        
});
})