// Business logic:
let swift = 0;
let python= 0;
let js = 0;

// value=swift, python, javascript
// add +1 every time a radio box is checked. 
function plusOne(element) {
  if (element === "swift"){
    return swift += 1; 
  } else if (element === "python"){
    return python +=1;
  } else if (element === "javascript"){
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
    plusOne($("input:radio[name=place]:checked").val());
    plusOne($("input:radio[name=mile]:checked").val());
    plusOne($("input:radio[name=fruit]:checked").val());
    plusOne($("input:radio[name=band]:checked").val());
    plusOne($("input:radio[name=city]:checked").val());
   
    $("#final").text(totalPoint(swift, python, js));
    animal = 0;
    place = 0; 
    mile = 0;
    fruit = 0;
    band = 0;
    city = 0;
  });
});