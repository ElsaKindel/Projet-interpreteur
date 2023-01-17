const prompt = require('prompt-sync')();

async function excecute(exec) {
    boucle=1;
    while(boucle){
        let msg = document.getDocumentById();
        msg.addEventListener("keydown", (event)=>{
            if (event.key=="p"){
                console.log("On a appuyé sur p");
            }
        });
        commande =prompt("Saisissez votre commande : ");
        if(commande=='p'){
            boucle=0;
        }
        else {
            const { stdout, stderr } = await exec(commande);
            console.log('stdout:', stdout);
            console.error('stderr:', stderr);
        }
    }
    
}


const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
excecute(exec);
