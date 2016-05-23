var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find by location', function() {
  it('Given a name, check if the map includes a location information for it  (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.find_by_loc("Or A.")
    expect(posts).to.be.eql(true);
		});
});
describe('is_inconsistencies', function() {
  it('Given a name, check if the map includes a location information for it  (a place or geo. location)', function() {
    var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
    var posts = map.is_inconsistencies("Or A.")
    expect(posts).to.be.eql(true);
		});
});