

function butto() {
       
if(document.getElementById("mk").value.length == 0)
{
    alert("Please Enter Your Name !!")
}
else{
    
    window.open("project/index.html");
    var s=document.getElementById("mk").value;
    localStorage.setItem("textvalue",s);
    
    
}
}

var stinum =localStorage.getItem("textvalue");
var counterc =0;
var counterv =0;

function sk(a,b) {
    document.querySelector("#p").setAttribute("src","../images/Hand_images/P2/rock.png");
    document.querySelector("#c").setAttribute("src","../images/Hand_images/P1/rock.png");
    var element = document.getElementById("p");
    element.classList.add("pk");
    var element1 = document.getElementById("c");
    element1.classList.add("ck");
    setTimeout(function(){
    var element = document.getElementById("p");
    element.classList.remove("pk");
    var element1 = document.getElementById("c");
    element1.classList.remove("ck");
     SWI(a,b);
    }, 900);
}
function ret() {
    var x=Math.floor(Math.random()*3)+1;
    return x;
}
function rock() {
    var k=ret();
     sk(1,k);
     if(k==3){
        counterv++;
     }
     else if(k==1){
        document.querySelector(".cname").innerHTML="Draw";
        document.querySelector(".vname").innerHTML="Draw";
     }
     else{
        counterc++;
     }
     document.querySelector(".cname").innerHTML="Computer:"+counterc;
     document.querySelector(".vname").innerHTML=stinum+":"+counterv;
     
}
function paper() {
    var k=ret();
    sk(2,k);
     if(k==3){
        counterc++;
     }
     else if(k==2){
        document.querySelector(".cname").innerHTML="Draw";
        document.querySelector(".vname").innerHTML="Draw";
     }
     else{
        counterv++;
     }
     document.querySelector(".cname").innerHTML="Computer:"+counterc;
     document.querySelector(".vname").innerHTML=stinum+":"+counterv;
    
}
function scissors() {
    var k=ret();
    sk(3,k);

     if(k==1){
        counterc++;
     }
     else if(k==3){
        document.querySelector(".cname").innerHTML="Draw";
        document.querySelector(".vname").innerHTML="Draw";
     }
     else{
        counterv++;
     }
     document.querySelector(".cname").innerHTML="Computer:"+counterc;
     document.querySelector(".vname").innerHTML=stinum+":"+counterv;
    
}
  

function SWI(v,c) {
switch (v) {
    case 1:
        document.querySelector("#p").setAttribute("src","../images/Hand_images/P2/rock.png");
        
        break;
    case 2:
        document.querySelector("#p").setAttribute("src","../images/Hand_images/P2/paper.png");
        

        break;
    case 3:
        document.querySelector("#p").setAttribute("src","../images/Hand_images/P2/Scissoes.png");
    
        break;
    default:
        alert("E");
        break;
}
switch (c) {
    case 1:
        document.querySelector("#c").setAttribute("src","../images/Hand_images/P1/rock.png");
        break;
    case 2:
        document.querySelector("#c").setAttribute("src","../images/Hand_images/P1/paper.png");
        break;
    case 3:
        document.querySelector("#c").setAttribute("src","../images/Hand_images/P1/Scissoes.png");
        break;
    default:
        alert("RS");
        break;
}
}

