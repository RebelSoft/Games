

 <script >



Leap.loop(function(frame) {

  frame.hands.forEach(function(hand, index) {
   
    //var cat = ( cats[index] || (cats[index] = new Cat()) );    
    player.setTransform(hand.screenPosition(), hand.roll());
    
  });
  
}).use('screenPosition', {scale: 0.25});



  player.setTransform = function(position, rotation) {

    img.style.left = position[0] - img.width  / 2 + 'px';
    img.style.top  = position[1] - img.height / 2 + 'px';

    img.style.transform = 'rotate(' + -rotation + 'rad)';
    
    img.style.webkitTransform = img.style.MozTransform = img.style.msTransform =
    img.style.OTransform = img.style.transform;

  };

};



// This allows us to move the cat even whilst in an iFrame.

Leap.loopController.setBackground(true);
</script>
