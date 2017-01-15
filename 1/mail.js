var mailer = require("nodemailer");

    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "manojhc142@gmail.com",
            pass: "8197200362"
        }
    });

    var mail = {
        from: "Manojhc<manojhc142@gmail.com>",
        to: "gargish1994@gmail.com",
        subject: "Send Email Using Node.js",
        text: "Node.js New world for me",
        
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });