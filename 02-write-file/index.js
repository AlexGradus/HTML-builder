const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');
const process = require('process');
const rl = readline.createInterface({ input, output });
const Conclusion = fs.createWriteStream(__dirname+'/text.txt');

 console.log('Попишем че-нибудь?');
 
 rl.on('line', (input) => {
   if(input==='exit'){
    console.log('До свидания!!!!!!');
    process.exit();
   }
   
});
rl.on('SIGINT', () => {
  console.log('До свидания!!!!!!');
  process.exit();
});

rl.on('line', (output) => {
  if(input!=='exit'){
    Conclusion.write(output)
  }
});


   
 
 
  

