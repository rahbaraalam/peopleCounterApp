
document.getElementById("people-el").innerHTML = 0; 
let count = 0;
function increment(){
    count += 1;

    document.getElementById("people-el").innerHTML = count;
}
let pre;
let preTxt = "Previous entries : ";
function save(){
    let pre =  document.getElementById("people-el").innerHTML;
    document.getElementById("previos-en").innerText = preTxt + pre;
    
    document.getElementById("people-el").innerHTML = 0;
    count = 0;
}