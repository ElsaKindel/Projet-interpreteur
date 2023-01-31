import readline from 'readline';
import util from 'node:util';
import { exec } from 'child_process';
import inquirer from 'inquirer';

async function dirExample(com) {
  exec(com, (err, stdout, stderr) => {
    if (err) {
      console.log("Nous avons rencontré une erreur :-(");
    }
    if (com=='tasklist'){
      var encours=stdout.split(/\r\n|\r|\n/);
      console.log(encours[1]);
      console.log(encours[2]);
      for (var i=1; i<encours.length; i++){
        console.log(i+" "+encours[i+2]);
      }
    }else{
      console.log(typeof stdout)
      console.log(`stdout: ${stdout}`);
    }
    console.log(`stderr: ${stderr}`);
    console.log("Rentrez votre commande ou ctrl+p pour quitter.")
  });
 
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
var quitter=0;

console.log("Bienvenue dans notre interpreteur.Rentrez votre commande ou ctrl+p pour sortir");
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'p') {
    process.exit();
    quitter=1;
  }
});
while (quitter==0){
  const reponse = await inquirer.prompt([{
    name: 'input',
  }]);
  if(reponse.input=="lp"){
    reponse.input="tasklist";
  }
  if(reponse.input.split(" ")[0]=="bing"){
    switch(reponse.input.split(" ")[1]){
      case "[-k]":
        reponse.input="taskkill /PID "+reponse.input.split(" ")[2]+" /F";
    }
  }
  if(reponse.input.split(" ")[1]=="!"){
    reponse.input=reponse.input.split(" ")[0]+"&";
    }

  await dirExample(reponse.input);

}

