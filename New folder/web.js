var addToCartButtons = document.getElementsByClassName('shop-item-button')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {
alert('Thank you for your purchase')

}

function addToCartClicked(event) {
var button = event.target
var shopItem = button.parentElement.parentElement
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src


console.log(title);
console.log(price);
console.log(imageSrc);

}

// // ORDER------------------





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
