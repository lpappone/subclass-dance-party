describe("slidingDancer", function() {

  var slidingDancer;
  var timeBetweenSteps = 100;
  var clock;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new SlidingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade toggle", function() {
    sinon.spy(slidingDancer.$node, 'fadeToggle');
    slidingDancer.step();
    expect(slidingDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(slidingDancer, "step");
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount).to.be.equal(2);
    });
  });
});
