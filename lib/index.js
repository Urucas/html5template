// es6 runtime requirements
require('babel/polyfill');

import fs from 'fs';
import colors from 'colors';

export default function html5template({
  name = "index.html",
  path = "./"
}){
  
  let source = __dirname + "/assets/template.html";
  
  let target = [
    path.replace(/\/$/,''),
    name.replace(/^\//,'')
  ].join("/");
  
  if(fs.existsSync(target)) {
    console.log("Output file already exists! --> " + target.red);
    return false;
  }
  
  let rd = fs.createReadStream(source);
  let wr = fs.createWriteStream(target);
  rd.pipe(wr);
  
  return target;
}
