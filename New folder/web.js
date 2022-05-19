var ul= document.getElementById("addinglist");
var button1=document.getElementsByClassName("shop-item-button1");
var button2=document.getElementsByClassName("shop-item-button2");
var button3=document.getElementsByClassName("shop-item-button3");
var button4=document.getElementsByClassName("shop-item-button4");
var button5=document.getElementsByClassName("shop-item-button5");
var button6=document.getElementsByClassName("shop-item-button6");
var button7=document.getElementsByClassName("shop-item-button7");
var button8=document.getElementsByClassName("shop-item-button8");
function createListElementone(){
  var li = document.createElement("li");
  var input=document.getElementsByClassName("shop-item-title1")[0].innerHTML;
  var price=document.getElementsByClassName("shop-item-price1")[0].innerHTML;
  li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
  ul.appendChild(li);
}
function addListAfterClickone() {   
    createListElementone();
    alert("item is added to your cart");
}

button1[0].addEventListener("click", addListAfterClickone);


      
function createListElementtwo(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title2")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price2")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClicktwo() {   
      createListElementtwo();
      alert("item is added to your cart");
  }
  
  button2[0].addEventListener("click", addListAfterClicktwo);
  

  function createListElement3(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title3")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price3")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick3() {   
      createListElement3();
      alert("item is added to your cart");
  }
  
  button3[0].addEventListener("click", addListAfterClick3);

  function createListElement4(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title4")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price4")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick4() {   
      createListElement4();
      alert("item is added to your cart");
  }
  
  button4[0].addEventListener("click", addListAfterClick4);

  function createListElement5(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title5")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price5")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick5() {   
      createListElement5();
      alert("item is added to your cart");
  }
  
  button5[0].addEventListener("click", addListAfterClick5);

  function createListElement6(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title6")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price6")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick6() {   
      createListElement6();
      alert("item is added to your cart");
  }
  
  button6[0].addEventListener("click", addListAfterClick6);

  function createListElement7(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title7")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price7")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick7() {   
      createListElement7();
      alert("item is added to your cart");
  }
  
  button7[0].addEventListener("click", addListAfterClick7);

  function createListElement8(){
    var li = document.createElement("li");
    var input=document.getElementsByClassName("shop-item-title8")[0].innerHTML;
    var price=document.getElementsByClassName("shop-item-price8")[0].innerHTML;
    li.appendChild(document.createTextNode(`Name: ${input} , Price:${price}`));
    ul.appendChild(li);
  }
  function addListAfterClick8() {   
      createListElement8();
      alert("item is added to your cart");
  }
  
  button8[0].addEventListener("click", addListAfterClick8);
// // Register with validation------------------

function validation()
{
var fuser = document.getElementById('fname').value; 
var luser = document.getElementById('lname').value; 
var mobileNumber=document.getElementById('number').value; 
var emails= document.getElementById ('email') .value;


if(fuser==""){

document.getElementById('userfname').innerHTML =" ** Please fill the username field";

return false;
}
if(!isNaN(fuser)){

document.getElementById('userfname').innerHTML =" ** Please Enter Your name using Alphabets";

return false;
}
if(luser == ""){

document.getElementById('userlname') .innerHTML =" ** Please fill the username field";

return false;
}
if(!isNaN(luser)){

document.getElementById('userlname').innerHTML =" ** Please Enter Your name using Alphabets";

return false;
}
if(luser == "!" || luser=="@"|| luser == "#" ||luser == "$" ||luser == "%" ||luser == "^" ||luser == "&" ||luser == "*" ||luser == "(" ||luser == ")" ||luser == "_" ||luser == "-" ||luser == "+" ||
luser == "[" ||luser == "]" ||luser == ","||luser == "." ||luser == ":" ||luser == ";" ||luser == "?" ||luser == ">" ||luser == "<" ||luser == "|" ||luser == "`"  ){

    document.getElementById('userlname') .innerHTML =" ** Characters are not allowed";
    
    return false;
    }

    if(emails == ""){

        document.getElementById('EMAIL') .innerHTML =" ** Please enter email";
        
        return false;
        }
        if(emails.indexOf('@')<= 0){

            document.getElementById('EMAIL') .innerHTML =" ** Please enter correct email";
            
            return false;
            }
        if(emails.charAt(emails.length-4)!="."){

            document.getElementById('EMAIL') .innerHTML =" ** Please enter correct email";
            
            return false;
            }
            if(mobileNumber == ""){

                document.getElementById('NUMBER') .innerHTML =" ** Please fill the  field";
                
                return false;
                }
                if(mobileNumber.length<11){

                    document.getElementById('NUMBER') .innerHTML =" ** Please fill the right number";
                    
                    return false;
                    }
                    if(isNan(mobileNumber)){

                        document.getElementById('NUMBER') .innerHTML ="Please enter Digits";
                        
                        return false;
                        }
                   
               
     
}
