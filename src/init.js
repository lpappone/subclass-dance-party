$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancer.$node.on("mouseover", function() {
      dancer.$node.html("<div><img src='http://37.media.tumblr.com/38a415b04d1711eac3fcffc382359068/tumblr_mjck4sk85a1r2y7r9o1_r1_500.gif'></div>");
    });
    window.dancers.push(dancer);
  });
});

$(".lineUp").on("click", function(event){
  var prancers = window.dancers;
  for (var i = 0; i < prancers.length; i++) {
    var y = Math.random() * 1000;
    prancers[i].setPosition(0, y);
  }
});

$(".danceOff").on('click', function (event){
  //console.log(event.target, "event target");
  var prancers = window.dancers;
  var pickDancer = Math.floor(Math.random()*prancers.length);
  var distances = [];
  //console.log(prancers[pickDancer])
  for (var i = 0; i < prancers.length; i++) {
    var yDistance = parseInt(prancers[pickDancer].$node.css('top')) - parseInt(prancers[i].$node.css('top'));
    // console.log(prancers[pickDancer].$node.css('top'));
    // console.log(typeof yDistance);
    // console.log(prancers[i].$node.css('top'));
    var xDistance = parseInt(prancers[pickDancer].$node.css('left')) - parseInt(prancers[i].$node.css('left'));
    // console.log(xDistance, yDistance);
    var distance = Math.sqrt((yDistance * yDistance) + (xDistance * xDistance));
    distances.push(distance);
  }
  var smallest = distances[0];
  for (var j = 1; j< distances.length; j++) {
    if (smallest > distances[j] && distances[j] !== 0) {
      smallest = distances[j];
    }
  var danceOffOpponent = prancers[distances.indexOf(smallest)];
  // console.log(danceOffOpponent);
  }
  var pickDancerTop = prancers[pickDancer].$node.css('top');
  var pickDancerLeft = prancers[pickDancer].$node.css('left');
  danceOffOpponent.$node.css({'top' : pickDancerTop, 'left' : pickDancerLeft}, 2000);
  //var index = distances.indexOf(Math.min.apply(null, distances));
});
