// // Register with validation------------------

function validation()
{
var fuser = document.getElementById('fname').value; 
var luser = document.getElementById('lname').value; 
var mobileNumber=document.getElementById('number').value; 
var emails= document.getElementById ('email') .value;
var password=document.getElementById ('password') .value;


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

var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(password.value.match(pass)) 
{ 
              
    document.getElementById('password') .innerHTML =" ** Correct password";
   

return true;
}
else
{ 
    document.getElementById('password') .innerHTML =" ** Please fillstrong password";
              
alert('Wrong...!')
return false;
}

}

                   
               
     
