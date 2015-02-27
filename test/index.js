import html5template from '../lib/';
import fs from 'fs';
import colors from 'colors';

describe("html5template tests", () => {

  it("Test template creation", (done) => {
  
    if(fs.existsSync(__dirname + "/template.html")) {
      fs.unlinkSync(__dirname + "/template.html");
    }
    html5template({name:"template.html", path:__dirname});
    if(fs.existsSync(__dirname + "/template.html")) {
      // template created
      fs.unlinkSync(__dirname + "/template.html");
      done();
    }else{
      throw new Error("Error creating default template");
    }
    
  });

});
