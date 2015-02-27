import html5template from '../lib/';
import fs from 'fs';

describe("Apigiphy instance test", () => {
  it("Test default template creatin", (done) => {
    html5template({});
    if(fs.existsSync("./index.html")) {
      done();
    }
    throw new Error("Error creating default template");
  });
});
