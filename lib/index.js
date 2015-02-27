// es6 runtime requirements
require('babel/polyfill');

import fs from 'fs';

export default function html5template({
  name = "index.html",
  path = "./"
}){
  
  let source = __dirname + "/assets/template.html";
  let rd = fs.createReadStream(source);
   
  let target = [
    path.replace(/\/$/,''),
    name.replace(/^\//,'')
  ].join("/");
  
  let wr = fs.createWriteStream(target);
  rd.pipe(wr);

}
