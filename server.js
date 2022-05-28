var FCM = require('fcm-node');
    var serverKey = 'AAAA5W5c9Y4:APA91bGYCBOS4ZXXtclyfXzb6KME2yveKrCihmKfIQR7C31ChI22zGBuwpMmQl6gI_pqmzy_W1cOEg2YiTditNSPyIRVYLdxat8Ilk3gUHsZZN9D9TmHbk91m7sfgoJGg1neFmwLbmdG'; //put your server key here
    var fcm = new FCM(serverKey);

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'cPWmeiJlT2Kog03zfv0Pkv:APA91bHW1ablfP5i8LBWTLFfwEPnJB03tZw4ZqUCAOf00WPHSYtGu-Tzj5pzNaRHw4dZSxpy1Wt-NPivjfnXdX_s5nUJvpw1UPd68uURnk8nqYxSX-qRltkBOKlEoPHGaH4dW2pe2gi5', 
        collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'test push notificationn', 
            body: 'Hi sathit srisawat' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });