var slidingDancer = function(top, left, timeBetweenSteps){
//  var oldStep = Dancer.prototype.step;
  Dancer.apply(this,arguments);

  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setColor();

};

slidingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step

    Dancer.prototype.step.apply(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    this.$node.fadeToggle(2000);
  };

slidingDancer.prototype.setPosition = Dancer.prototype.setPosition;

slidingDancer.prototype.setColor = function(){
  this.$node.addClass('slider');
};
