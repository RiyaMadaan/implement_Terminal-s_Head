let file = process.argv[2];

let fs = require("fs");

let content = fs.readFileSync(file, "utf8");
let line = 1;
let show = content.split('\n');
for(line=1;line<=10;line++){
  if(show[line] == undefined){
    return;
  }
  else{
  console.log(show[line-1]);
}
}
