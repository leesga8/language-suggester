// Business logic:
let swift = 0;
let python= 0;
let js = 0;

// value=swift, python, javascript
// add +1 every time a radio box is checked. 
function plusOne(x) {
  if (x === "swift"){
    return swift += 1; 
  } else if (x === "python"){
    return python +=1;
  } else if (x === "javascript"){
  return js +=1;
  }
}

//compare with total points and return largest
function totalPoint(swift, python, js) {
  if (swift > python && swift > js) {
    return "You should learn Swift."
  } else if (python > swift && python > js) {
    return "You should learn Python."
  } else if (js > swift && js > python) {
    return "You should learn Javascript."
  } else if (python === swift || python === js || swift === js){
    return "You are well-balanced. Choose any."
  }
  else {
    return "Please Try Again"
  }
}
// Everything below this line is user interface logic:
$(document).ready(function() {
  $('#survey').submit(function(event) {
    event.preventDefault();
    plusOne($("input:radio[name=animal]:checked").val());
    // $("input:radio[name=place]:checked").val();
    // $("input:radio[name=mile]:checked").val();
    // $("input:radio[name=fruit]:checked").val();
    // $("input:radio[name=band]:checked").val();
    $("#final").text(totalPoint("animal", "place", "mile", "fruit", "band", "city"));
    animal = 0;
    place = 0; 
    mile = 0;
    fruit = 0;
    band = 0;
    city = 0;
  });
});