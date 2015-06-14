/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-mixed/h-card/tworoots
The test was built on Sun Jun 14 2015 13:24:56 GMT+0100 (BST)
*/

assert = chai.assert;


describe('h-card', function() {
   var htmlFragment = "<p class=\"h-card vcard\">Frances Berriman</p>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-card"],"properties":{"name":["Frances Berriman"]}}],"rels":{},"rel-urls":{}};

   it('tworoots', function(){
       assert.deepEqual(found, expected);
   });
});