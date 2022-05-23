const fs = require('fs');
const path = require('path');
const {rm, mkdir, readFile, readdir, copyFile} = require('fs/promises');
let b=path.join(__dirname)+'/template.html';
let c=path.join(__dirname)+'/components/';
let d=path.join(__dirname,'project-dist');
let e=path.join(__dirname,'project-dist','index.html');
let f=path.join(__dirname)+'/styles';
let r=path.join(__dirname)+'/project-dist/style.css';
let inside=path.join(__dirname,'project-dist','assets');
let s=path.join(__dirname,'assets');


async function CreateDir(){
  
  
   
  await rm(d, { force: true, recursive: true});
  
  
  
}

async function SolveDir(){
  await mkdir(d, {recursive: true});
  await  CDR(s, inside);
  async function CDR(a, b) {
     
    await mkdir(b, {recursive: true});
    const Tutorial = await readdir(a, {withFileTypes: true});
    for(const file of Tutorial) {
      if(file.isFile()) {
        const asdt = path.join(a, file.name);
        const asdv = path.join(b, file.name);
        copyFile(asdt, asdv);
      } else {
        CDR(path.join(a, file.name), path.join(b, file.name));
      }
    }

  }
}


async function OpenText(){
  fs.readFile( b, 'utf-8',(err,data) =>{
    if(err) throw err;
    let Str='';
    Str=Str+data;
    
   
    async function ArrrovedText(){
      let TextToChange=Str.match(/{{.+}}/gi);
      for (let Text of TextToChange){
        let TextId=Text.match(/\w+/)[0];
        const AS = await readFile( c+`${TextId}.html`);
        Str = Str.replace(new RegExp(Text, 'g'), AS.toString());
       
      }
      
      const WrStream =  fs.createWriteStream(e);
      WrStream.write(Str);
    }
    
    ArrrovedText();
    
    function Write(i,c){
    
      fs.readFile( f+`/${i}`, 'utf-8',(err,data) =>{
        if(err) throw err;
        c.push(data);
        fs.writeFile( r, c.join(''),(err) => {
          if (err)
            console.log(err);});
      });
    }
    fs.readdir(f, {withFileTypes: true},(err, files)=>{
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
    
  });
  
  

 
}

const Conclusion=async()=>{
  await CreateDir();
  await SolveDir();
  await OpenText();
};

Conclusion();











