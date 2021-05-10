function onGooglePayLoaded(){
    const googlePayClient = 
    new google.payents.api.PaymentsClient({
        enironment: 'TEST'
    });
}

function getGooglePaymentsClient(){
    if(!gpayCleint){
        gpayCleint=new google.payments.api.PaymentsClient({environment:'TEST'
        })
    }
    return gpayCleint
}


const clientConfiguration = {
    apiVersion:2,
    apiVersionMonir:0,
    allowedPaymentMethods: [cardPaymentMethod]
};

googlePayClient.isReadyToPay(clientConfiguration)
.then(function(response) {
    if(response.result){
        //add pay button
        googlePayClient.createButton({
            buttonColor: 'default',
            buttonType:'',
            onclick: onGooglePaymentsButtonClicked
        });
    }
}).catch(function(err) {
    //log error in developer conole
});

function addGooglePayButton() {
    const button = getGooglePaymentsClient().createButton({
        onclick: onGooglePaymentsButtonClicked(),
        buttonType: 'short',
        buttonColor:'green',
    });
    document.getElementById('container').appendChild(button);
}