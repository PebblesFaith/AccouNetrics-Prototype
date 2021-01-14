    
   
    function submitContactUs() {
        const userFirstName = document.getElementById('firstName').value;    
        
        const userMiddleName = document.getElementById('middleName').value;        

        const userLastName = document.getElementById('lastName').value;         
        
        const regExName = /^[a-zA-Z]+$/;

        const userMembership = document.getElementById('userMembership').value;         

        const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const userEmail = document.getElementById('email').value; 
        const userEmailLowerCase = userEmail.toLowerCase();       

        const userconfirmEmail = document.getElementById('confirmEmail').value; 
        const userConfirmEmailLowerCase = userconfirmEmail.toLowerCase(); 
        
        const textMessage = document.getElementById('message').value;             

        if (userFirstName === "" || userFirstName == null || userFirstName.length <= 2 || !userFirstName.match(regExName)) { 
            document.getElementById("userFirstNameErrorMessage").style.color = "#b48900";  
            document.getElementById("userFirstNameErrorMessage").style.background = "#f3f3f3";                  
            document.getElementById("userFirstNameErrorMessage").innerHTML = "Your First Name is a required field or You must enter more than two characters.";  

            setTimeout(function() {
                document.getElementById("userFirstNameErrorMessage").innerHTML = "";
            },
            7000);   
            return false;
        } 
        
        console.log("User First Name is: " + userFirstName);
        
        console.log("User Middle Name is: " + userMiddleName);
     

        if (userLastName === "" || userLastName == null || userLastName.length <= 2 || !userLastName.match(regExName)) { 
            document.getElementById("userLastNameErrorMessage").style.color = "#b48900";     
            document.getElementById("userLastNameErrorMessage").style.background = "#f3f3f3";    
            document.getElementById("userLastNameErrorMessage").innerHTML = "Your Last Name is a required field or You must enter more than two characters.";             

            setTimeout(function() {
                document.getElementById("userLastNameErrorMessage").innerHTML = "";
            },
            7000);   
            return false;
        } 

        console.log("User Last Name is: " + userLastName);

        if (userMembership === "" || userMembership == null) { 
            document.getElementById("userMembershipErrorMessage").style.color = "#b48900";    
            document.getElementById("userMembershipErrorMessage").style.background = "#f3f3f3";  
            document.getElementById("userMembershipErrorMessage").innerHTML = "You must select your Membership status is a required field.";             

            setTimeout(function() {                            
                document.getElementById("userMembershipErrorMessage").innerHTML = "";
            },
            7000);   
            return false;
        } 

        console.log("User Membership enter is: " + userMembership);

        if (userEmailLowerCase === "" || userEmailLowerCase == null || !userEmailLowerCase.match(regEx)) { 
            document.getElementById("userEmailErrorMessage").style.color = "#b48900";  
            document.getElementById("userEmailErrorMessage").style.background = "#f3f3f3";  
            document.getElementById("userEmailErrorMessage").innerHTML = "You must enter, your a correct Email address format or the Email address field must not be blank.";             

            setTimeout(function() {                            
                document.getElementById("userEmailErrorMessage").innerHTML = "";
            },
            7000);   
            return false;
        } 

        console.log("User Email enter is: " + userEmailLowerCase);
        
        if (userConfirmEmailLowerCase === "" || userConfirmEmailLowerCase == null || !userConfirmEmailLowerCase.match(regEx)) { 
            document.getElementById("userConfirmEmailErrorMessage").style.color = "#b48900";    
            document.getElementById("userConfirmEmailErrorMessage").style.background = "#f3f3f3";   
            document.getElementById("userConfirmEmailErrorMessage").innerHTML = "You must enter, your a correct Confirm Email address format or the Confirm Email address field must not be blank.";             

            setTimeout(function() {                            
                document.getElementById("userConfirmEmailErrorMessage").innerHTML = "";
            },
            7000);   
            return false;
        } 

        console.log("User Confirm Email enter is: " + userConfirmEmailLowerCase); 
        
        if (userEmailLowerCase != userConfirmEmailLowerCase) { 
            document.getElementById("userConfirmEmailErrorMessage").style.color = "#b48900";  
            document.getElementById("userConfirmEmailErrorMessage").style.background = "#f3f3f3";  
            document.getElementById("userConfirmEmailErrorMessage").innerHTML = "Your Email Address does not match your Confirm Email Address.";             

            setTimeout(function() {                            
                document.getElementById("userConfirmEmailErrorMessage").innerHTML = "";
            },
            7000);   
            return false;        
        }  
        
        console.log("User Email and Confirm Email Addresses match : " + userEmailLowerCase + "  match  " + userConfirmEmailLowerCase);   
        

        if (textMessage === "" || textMessage == null || textMessage.length <= 5) {             
            document.getElementById("userErrorMessage").style.color = "#b48900";  
            document.getElementById("userErrorMessage").style.background = "#f3f3f3";  
            document.getElementById("userErrorMessage").innerHTML = "Your Text Message is a required field or You must enter more than twenty-five characters.";             

            setTimeout(function() {
                document.getElementById("userErrorMessage").innerHTML = "";
            },
            7000);   
            return false;            
        }      
        
        console.log("User text message entered is: " + textMessage); 

        console.log("All Javascript coding in programmatic codes works successfully!");

        Email.send({
            Host : "smtp.gmail.com",
            Username : "contactusaccounetrics@gmail.com",
            Password : "wktdehrgmzvqtqkx",
            To : userEmail,
            Bcc : 'contactus@accouNetrics.com',
         
            From : "contactus@accounetrics.com",
            Subject : "Test SMTPJS Send Email",
            Body :`<h3>Thank You.<br> ${userFirstName}, <br>We have confirmed your contact us email is as follows: </h3><h5>Name: ${userFirstName} ${userMiddleName} ${userLastName}<br>Membership: ${userMembership}<br>Email: ${userEmail}<br>Confirm Email: ${userconfirmEmail}<br>Message: ${textMessage} <br><br>A message from AccouNetrics:<br>We are thrilled that you have contact us. And, if you have any questions or need immediate assistance, please do not hesitate to reach out to us at help@accouNetrics.com.</h5>`,
            
        }).then(
            function (message) {
                console.log("User SMTPJS Email Successfully Sent!");
        }); 

        // After, user had clicked onto the "submitContactUs" button the Javascript code 'window.open' will open into the index3.html. 

        window.open("file:///C:/Users/sarai/Documents/AccouNetrics-Prototype/index3.html", "_blank");
    
    }

    function userMiddleName() {
        document.getElementById("userMiddleNameErrorMessage").style.color = "#b48900";   
        document.getElementById("userMiddleNameErrorMessage").style.background = "#f3f3f3";  
        document.getElementById("userMiddleNameErrorMessage").innerHTML = "Do you have a Middle Name?";     

        setTimeout(function() {
            document.getElementById("userMiddleNameErrorMessage").innerHTML = "";
        },
        7000);   
        return false;
    }

    const textMessage2 = document.getElementById('message');
    const length = textMessage2.getAttribute('maxlength');
    const textCount = document.getElementById('countMessage');
    textCount.innerHTML = length;

    textMessage2.onkeyup = function() {                         
                    
        document.getElementById('countMessage').innerHTML = (length - this.value.length);       
    
    } 

    
 
        



    

  
   
  
    
    
   



   

        
    
   

   
    

        

        
        
 

   


    
    
        
   






















































