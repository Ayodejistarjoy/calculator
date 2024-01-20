 function press(me) {
       display.value += `${me}`
 }
function ner() {
     
    document.getElementById('display').value = ''
}
function lick() {
    if(display.value === ''){
        console.log("it nothing");
    }
    else{
    display.value=eval(display.value)}
}


