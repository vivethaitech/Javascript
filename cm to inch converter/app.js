var message = document.getElementById("message");
message.innerHTML="cm to inch converter"
function convert(){
let cmValue=Number(document.getElementById("input").value)
let inchValue=cmValue/2.54
let result = document.getElementById("result")
result.innerHTML="The result is "+inchValue.toFixed(2)+" inches"

}