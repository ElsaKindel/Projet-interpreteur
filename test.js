//console.log("\n Echo youpi \n");
/*const prompt = require('prompt-sync')();
let hello = prompt("Comment t'appelles-tu ? ","...");
console.log("Bonjour " + hello);*/
/*const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);*/
/*const { exec } = require('node:child_process');
exec('ls', (error, stdout, stderr)=>{
    if (error){
        console.error('exec error : ' +error);
        return;
    }
    console.log('stdout: '+ stdout);
    console.error('stderr: ${stderr}');
});
*/
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('dir');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();
