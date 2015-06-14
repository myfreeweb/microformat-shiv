/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v2/h-review/justaname
The test was built on Sun Jun 14 2015 13:24:56 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-review', function() {
   var htmlFragment = "<p class=\"h-review\">Crepes on Cole</p>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-review"],"properties":{"name":["Crepes on Cole"]}}],"rels":{},"rel-urls":{}};

   it('justaname', function(){
       assert.deepEqual(found, expected);
   });
});