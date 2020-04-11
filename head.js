const number = process.argv[2];
const file = process.argv[3];
const fs = require("fs");

let isExists = fs.existsSync(file);
if(isExists == true){

const N = number.split("-n");

let result = parseInt(N[1]);

let isInteger = Number.isInteger(result);

if(isInteger==true){
let content = fs.readFileSync(file, "utf8");
let line = 1;
let show = content.split('\n');
for(line = 1; line <= N[1]; line++){
  if(show[line] == undefined){
    return;
  }
  else{
  console.log(show[line-1]);
}
}
}
else{
  console.log("head: invalid number of lines:" , N[1]);
  return;
}
}
else{
  console.log("Error: ENOENT: no such file or directory");
  return;
}
