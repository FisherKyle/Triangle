// Backend Logic

$(document).ready(function() {
  $(".btn").click(function(){
    $(".answer").hide();
    var input1 = $("input#firstSide").val();
    var input2 = $("input#secondSide").val();
    var input3 = $("input#thirdSide").val();
    var firstSide = parseInt(input1);
    var secondSide = parseInt(input2);
    var thirdSide = parseInt(input3);




    // if(firstSide === secondSide && firstSide === thirdSide){
    //   $(".equilateral").show();
    // }
    // else if ((firstSide + secondSide <= thirdSide) || (secondSide + thirdSide <= firstSide) || (firstSide + thirdSide <= secondSide)) {
    //   $(".falsetriangle").show();
    // }
    // else if (firstSide === secondSide && firstSide != thirdSide || firstSide === thirdSide && firstSide != secondSide) {
    //   $(".isosceles").show();
    // }
    // else {
    //   $(".scalene").show();
    // }

    if (firstSide + secondSide > thirdSide || firstSide + thirdSide > secondSide || thirdSide + secondSide > firstSide) {
      $(".falsetriangle").show();
    } else { // I do have a triangle of some sort.
      if (firstSide === secondSide && firstSide === thirdSide) {
        $(".equilateral").show();
      } else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) { // check if I need all three.
        $(".isosceles").show();
      } else {
         $(".scalene").show();
      }
    }



  });
});
