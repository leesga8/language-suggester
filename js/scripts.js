// Business logic:
let swiftlang = 0;
let pythonlang= 0;
let jslang = 0;

// value=swift, python, javascript
// add +1 every time a radio box is checked. 
function plusOne(x) {
  if (x === "swift"){
    return swiftlang += 1;
  } else if (x === "python"){
    return pythonglang +=1;
  } else if (x === "jslang"){
  return jslang +=1;
}

//compare with total points and return largest

function totalPoints(swiftlang, pythonlang, jslang) {
  if (swiftlang > pythonglang && swiftlang > jslang) {
    return "You should learn Swift."
  } else if (pythonlang > swiftlang && pythonlang > jslang) {
    return "You should learn Python."
  } else if (jslang > swiftlang && jslang > pythonlang) {
    return "You should learn Javascript."
  }




// Everything below this line is user interface logic:

$(document).ready(function() {
  $('#survey').submit(function(event) {
    event.preventDefault();

    $("input:radio[name=animal]:checked").val();
    $("input:radio[name=place]:checked").val();
    $("input:radio[name=mile]:checked").val();
    $("input:radio[name=fruit]:checked").val();
    $("input:radio[name=band]:checked").val();


  });
});



// page 41, 47,49 